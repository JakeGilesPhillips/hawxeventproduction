import { Document } from "@contentful/rich-text-types";
import { Asset, Entry } from "contentful";

export interface Size {
	width?: number;
	height?: number;
}

export interface ISection {
	title: string;
	logo: Asset;
	description: Document;
	color: string;
	order: number;
}

export interface IScrollSection {
	section: Entry<ISection>;
	scrollMin: number;
	scrollMax: number;
}

export interface IEvent {
	name: string;
	thumbnail?: Asset;
	description: Document;
	images?: Asset[];
}

export interface IService {
	title: string;
	description?: Document;
}
