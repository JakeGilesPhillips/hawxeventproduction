import { Document } from '@contentful/rich-text-types';
import { Asset } from 'contentful';

export interface Size {
	width: number;
	height: number;
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
