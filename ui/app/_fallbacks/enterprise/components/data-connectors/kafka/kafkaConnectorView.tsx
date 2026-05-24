import ContactUsView from "../../views/contactUsView";

interface KafkaConnectorViewProps {
	onDelete?: () => void;
	isDeleting?: boolean;
}

export default function KafkaConnectorView(_props: KafkaConnectorViewProps) {
	return (
		<div className="space-y-6">
			<div className="space-y-4">
				<div className="flex w-full flex-col items-center justify-center py-8">
					<ContactUsView
						align="middle"
						className="mx-auto w-full max-w-lg"
						icon={
							<svg viewBox="0 0 111.6 112" xmlns="http://www.w3.org/2000/svg" width="88" height="88" strokeWidth={1} className="text-muted-foreground">
								<path
									fill="currentColor"
									d="M56.2 46.2c-5.2 0-9.5 3.7-10.5 8.6H23.5c-1-7.9-7.8-14.1-15.9-14.1C3.4 40.7 0 44.1 0 48.3v15.4c0 4.2 3.4 7.5 7.6 7.5 8.2 0 14.9-6.1 15.9-14h22.2c1 4.9 5.3 8.6 10.5 8.6 5.9 0 10.7-4.8 10.7-10.7-.1-6-4.9-10.9-10.7-10.9z"
								/>
								<path
									fill="currentColor"
									d="M104 40.7c-8.2 0-14.9 6.2-15.9 14.1H65.9c-1-4.9-5.3-8.6-10.5-8.6v21.5c5.2 0 9.5-3.7 10.5-8.6h22.2c1 7.9 7.8 14 15.9 14 4.2 0 7.6-3.4 7.6-7.5V48.3c-.1-4.2-3.4-7.6-7.6-7.6z"
								/>
								<circle fill="currentColor" cx="56.2" cy="18.4" r="10.7" />
								<circle fill="currentColor" cx="56.2" cy="93.6" r="10.7" />
							</svg>
						}
						title="Unlock native Kafka log streaming for real-time observability"
						description="This feature is a part of the Bifrost enterprise license. Stream completed request traces as JSON to a Kafka topic for real-time analytics, alerting, and downstream processing."
						readmeLink="https://docs.getbifrost.ai/enterprise/kafka-connector"
					/>
				</div>
			</div>
		</div>
	);
}
