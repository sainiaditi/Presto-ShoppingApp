const View = require("presto-ui").baseView;
const dom = require("presto-ui").doms;

const LinearLayout = require("presto-ui").views.LinearLayout;
const TextView = require("presto-ui").views.TextView;

const Config = require('./../globalConfig');
const Controller = require('./../controller/components/Header');
const Strings = require('./../res/string');
const Accessibility = require('./../res/accessibility');
const Font = require('./../res/fontStyle');
const FontColor = require('./../res/fontColor');
const FontSize = require('./../res/fontSize');
const Color = require('./../res/color');

class Header extends Controller {

	constructor(props, children, state) {
		super(props, children, state);
		this.STR = Strings();
		this.HINT = Accessibility();
	}

	onPop = () => {}

	render = () => {
		let Header = (this.props.Header) ? this.props.Header : this.Header;
		this.layout = (
			<LinearLayout
				id={this.idSet.Header}
				height={this.props.height ? this.props.height:"54"}
				width={this.props.width ? this.props.width:"match_parent"}
				orientation="horizontal"
				gravity="center"
				background={Color.A__FFFFFFFF}
				cornerRadius="0"
				root={true}
				margin={this.props.margin ? this.props.margin:"0,0,0,0"}
				weight={this.props.weight ? this.props.weight:"0"}
				style={this.style_Header}>
				<TextView
					id={this.idSet.Header}
					height="34"
					width="match_parent"
					text={Header}
					textSize={FontSize.A_30}
					color={FontColor.A__FFD45630}
					fontStyle={Font.SOURCESANSPRO_BOLD}
					gravity="center"
					style={this.style_Header} />
			</LinearLayout>
		);
		return this.layout.render();
	}

};

module.exports = Header;
