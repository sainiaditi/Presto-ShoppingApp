const View = require("presto-ui").baseView;
const dom = require("presto-ui").doms;

const LinearLayout = require("presto-ui").views.LinearLayout;
const ImageView = require("presto-ui").views.ImageView;
const TextView = require("presto-ui").views.TextView;

const Config = require('./../globalConfig');
const Controller = require('./../controller/components/HeaderWithBack');
const Strings = require('./../res/string');
const Accessibility = require('./../res/accessibility');
const Font = require('./../res/fontStyle');
const FontColor = require('./../res/fontColor');
const FontSize = require('./../res/fontSize');
const Color = require('./../res/color');

class HeaderWithBack extends Controller {

	constructor(props, children, state) {
		super(props, children, state);
		this.STR = Strings();
		this.HINT = Accessibility();
	}

	onPop = () => {}

	render = () => {
		this.layout = (
			<LinearLayout
				id={this.idSet.HeaderWithBack}
				height={this.props.height ? this.props.height:"54"}
				width={this.props.width ? this.props.width:"match_parent"}
				orientation="horizontal"
				gravity="center_vertical"
				padding="20,10,20,10"
				background={Color.A__FFFFFFFF}
				cornerRadius="0"
				root={true}
				margin={this.props.margin ? this.props.margin:"0,0,0,0"}
				weight={this.props.weight ? this.props.weight:"0"}
				style={this.style_HeaderWithBack}>
				<ImageView
					id={this.idSet.InvoiceWithArrow}
					height="30"
					width="30"
					imageUrl="invoicewitharrow5"
					style={this.style_InvoiceWithArrow} />
				<TextView
					id={this.idSet.Text}
					height="34"
					width="270"
					margin="20,0,0,0"
					weight="1"
					text={this.STR.Text}
					textSize={FontSize.A_30}
					color={FontColor.A__FFD45630}
					fontStyle={Font.SOURCESANSPRO_BOLD}
					gravity="left"
					style={this.style_Text} />
			</LinearLayout>
		);
		return this.layout.render();
	}

};

module.exports = HeaderWithBack;
