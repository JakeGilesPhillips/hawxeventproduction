export const capitalise = (text: string) => {
	if (!text || text == "") return null;
	return text.replace(text[0], text.trim()[0].toUpperCase());
};

export const extractPageName = (pathName: string) => {
	const page = pathName.replace("/", "").trim();
	if (page) return `- ${capitalise(page) ?? "Home"}`;
	return "";
};

export const getScrollPercentage = (amount: number, min: number, max: number) => {
	return Math.max(0, 1 - (max - amount) / Math.max(0, max - min));
};

export const getScrollMinMax = (sectionHeight: number, index: number): { scrollMin: number; scrollMax: number } => {
	return { scrollMin: sectionHeight * index, scrollMax: sectionHeight * (index + 1) };
};
