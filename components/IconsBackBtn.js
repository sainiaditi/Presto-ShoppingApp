const View = require("presto-ui").baseView;
const dom = require("presto-ui").doms;

const ImageView = require("presto-ui").views.ImageView;

const Config = require('./../globalConfig');
const Controller = require('./../controller/components/IconsBackBtn');
const Strings = require('./../res/string');
const Accessibility = require('./../res/accessibility');
const Font = require('./../res/fontStyle');
const FontColor = require('./../res/fontColor');
const FontSize = require('./../res/fontSize');
const Color = require('./../res/color');

class IconsBackBtn extends Controller {

	constructor(props, children, state) {
		super(props, children, state);
		this.STR = Strings();
		this.HINT = Accessibility();
	}

	onPop = () => {}

	render = () => {
		this.layout = (
			<ImageView
				id={this.idSet.Arrow_back}
				height={this.props.height ? this.props.height:"24"}
				width={this.props.width ? this.props.width:"24"}
				imageUrl="arrowback4"
				margin={this.props.margin ? this.props.margin:"0,0,0,0"}
				weight={this.props.weight ? this.props.weight:"0"}
				style={this.style_Arrow_back} />
		);
		return this.layout.render();
	}

};

module.exports = IconsBackBtn;
