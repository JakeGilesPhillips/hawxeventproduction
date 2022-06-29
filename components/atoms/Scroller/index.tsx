interface ScrollerProps {
	height: number;
}

const Scroller = (props: ScrollerProps) => {
	const { height } = props;
	return <div id="scroller" style={{ height }} />;
};

export default Scroller;
