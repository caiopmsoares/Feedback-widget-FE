import { CloseButton } from '../../CloseButton';

interface FeedbackSuccessStepProps {
	onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({
	onFeedbackRestartRequested,
}: FeedbackSuccessStepProps) {
	return (
		<>
			<header>
				<CloseButton />
			</header>

			<div className="flex flex-col items-center py-10 w-[304px]">
				<svg
					width="48px"
					height="48px"
					viewBox="0 0 48 48"
					version="1"
					xmlns="http://www.w3.org/2000/svg"
					enable-background="new 0 0 48 48"
				>
					<circle fill="#4CAF50" cx="24" cy="24" r="21" />
					<polygon
						fill="#FFF"
						points="34.6,14.6 21,28.2 15.4,22.6 12.6,25.4 21,33.8 37.4,17.4"
					/>
				</svg>

				<span className="text-xl mt-2">Agradecemos o feedback!</span>
				<button
					type="button"
					onClick={onFeedbackRestartRequested}
					className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
				>
					Quero enviar outro
				</button>
			</div>
		</>
	);
}
