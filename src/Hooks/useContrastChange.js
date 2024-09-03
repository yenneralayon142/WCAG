import { useEffect } from 'react';
import { useAccessibilityContext } from '../contexts/accesibilityContext';

export function useContrastChange() {
	const { settings, updateSettings } = useAccessibilityContext();
	const options = ["normal", "invertido", "oscuro", "claro"];

	useEffect(() => {
		const contrastElement = document.getElementById('contrast');
		const currentIndex = options.findIndex(contrast => contrast == settings.contrast);
		console.info("El indice actual es: " + currentIndex);

		const changeContrast = () => {
			const nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
 			updateSettings({ contrast: options[nextIndex] });
		};

		const applyStyles = () => {
			switch (settings.contrast) {
				case 'invertido':
					document.querySelector('html').style = 'filter: invert(100%)';
					break;
				default:
					document.querySelector('html').style = 'filter: invert(0%)';
					break;
			}
		}

		if (contrastElement) {
			applyStyles();
			contrastElement.addEventListener('click', changeContrast);
		}

		return () => {
			if (contrastElement) {
				applyStyles();
				contrastElement.removeEventListener('click', changeContrast);
			}
		};
	}, [settings]);

	return null;
}
