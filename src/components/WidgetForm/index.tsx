import { CloseButton } from '../CloseButton';

import bugImgUrl from '../../assets/bug.svg';
import ideaImgUrl from '../../assets/idea.svg';
import thoughtImgUrl from '../../assets/thought.svg';
import { useState } from 'react';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';

export const feedbackTypes = {
	BUG: {
		title: 'Problema',
		image: {
			source: bugImgUrl,
			alt: 'Imagem de um inseto',
		},
	},
	IDEA: {
		title: 'Ideia',
		image: {
			source: ideaImgUrl,
			alt: 'Imagem de uma lampada',
		},
	},
	OTHER: {
		title: 'Outro',
		image: {
			source: thoughtImgUrl,
			alt: 'Imagem de um homem pensando',
		},
	},
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
	const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

	return (
		<div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
			<header>
				<span className="text-xl leading-6">Deixe seu feedback</span>

				<CloseButton />
			</header>

			{!feedbackType ? (
				<FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
			) : (
				<FeedbackContentStep />
			)}

			<footer className="text-xs text-neutral-400">
				<a
					className="underline underline-offset-2"
					href="https://github.com/caiopmsoares"
				>
					Caio Macedo©
				</a>
				2022
			</footer>
		</div>
	);
}
