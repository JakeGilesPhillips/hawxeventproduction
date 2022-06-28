export const capitalise = (text: string) => {
	if (!text || text == '') return null;
	return text.replace(text[0], text.trim()[0].toUpperCase());
};

export const extractPageName = (pathName: string) => {
	const page = pathName.replace('/', '').trim();
	if (page) return `- ${capitalise(page) ?? 'Home'}`;
	return '';
};
