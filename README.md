# Bifrost

A high-performance, extensible API gateway for LLM providers — fork of [maximhq/bifrost](https://github.com/maximhq/bifrost).

## Overview

Bifrost acts as a unified gateway to multiple LLM providers (OpenAI, Anthropic, Cohere, etc.), offering:

- **Provider abstraction**: Single API surface for all LLM backends
- **Automatic failover**: Seamlessly retry across providers on failure
- **Rate limiting & load balancing**: Distribute requests intelligently
- **Observability**: Structured logging, metrics, and tracing
- **Extensible middleware**: Plug in custom request/response transformations

## Getting Started

### Prerequisites

- Go 1.21+
- Docker (optional)

### Installation

```bash
git clone https://github.com/your-org/bifrost.git
cd bifrost
go mod download
```

### Running Locally

```bash
# Copy and edit configuration
cp config.example.yaml config.yaml

# Run the server
go run ./cmd/bifrost/main.go --config config.yaml
```

### Docker

```bash
docker build -t bifrost .
docker run -p 8080:8080 -v $(pwd)/config.yaml:/app/config.yaml bifrost
```

## Configuration

Bifrost is configured via a YAML file. See `config.example.yaml` for a full reference.

```yaml
server:
  port: 8080
  timeout: 120s  # increased from 60s — local Ollama models can be especially slow on first load

providers:
  openai:
    api_key: "${OPENAI_API_KEY}"
    models:
      - gpt-4o
      - gpt-4o-mini
  anthropic:
    api_key: "${ANTHROPIC_API_KEY}"
    models:
      - claude-3-5-sonnet-20241022
```

## Development

### Project Structure

```
bifrost/
├── cmd/bifrost/        # Main entry point
├── internal/
│   ├── gateway/        # Core gateway logic
│   ├── providers/      # LLM provider adapters
│   ├── middleware/     # Request/response middleware
│   └── config/         # Configuration loading
├── pkg/                # Public packages
├── .claude/skills/     # Claude AI skill definitions
└── docs/               # Documentation
```

### Running Tests

```bash
# Unit tests
go test ./...

# With race detector
go test -race ./...

# E2E tests (requires running server)
go test ./tests/e2e/... -tags=e2e
```

### Linting

```bash
golangci-lint run
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/my-feature`)
3. Commit your changes following [Conventional Commits](https://www.conventionalcommits.org/)
4. Open a pull request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for release history.

## License

MIT — see [LICENSE](LICENSE) for details.
