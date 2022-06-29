import Image, { ImageProps } from 'next/image';
import { Asset } from 'contentful';

export interface IImageProps extends Partial<ImageProps> {
	image?: Asset;
}

const Img = (props: IImageProps) => {
	const { image } = props;

	return (
		<Image
			alt={image?.fields.title ?? ''}
			width={image?.fields.file.details.image?.width}
			height={image?.fields.file.details.image?.height}
			{...props}
			src={`https:${image?.fields.file.url}`}
		/>
	);
};

export default Img;
