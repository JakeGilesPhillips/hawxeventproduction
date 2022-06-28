import { NextPage } from 'next';
import { createClient, Entry } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { IEvent } from '../../utils/models';
import Img from '../../components/Img';
import { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } from '../../utils/constants';

export async function getStaticProps() {
	const client = createClient({
		space: CONTENTFUL_SPACE_ID ?? '',
		accessToken: CONTENTFUL_ACCESS_TOKEN ?? '',
	});

	const res = await client.getEntries({ content_type: 'event' });
	return { props: { events: res.items } };
}
interface EventsProps {
	events: Entry<IEvent>[];
}

const Events: NextPage<EventsProps> = (props: EventsProps) => {
	const { events } = props;

	console.log(events[0].fields.thumbnail);
	return (
		<div>
			{events?.map((event, index) => (
				<div key={index}>
					<span>{event.fields.name}</span>
					<Img image={event.fields.thumbnail} />
					{documentToReactComponents(event.fields.description)}
				</div>
			))}
		</div>
	);
};

export default Events;
