const View = require("presto-ui").baseView;
const dom = require("presto-ui").doms;

const LinearLayout = require("presto-ui").views.LinearLayout;
const ImageView = require("presto-ui").views.ImageView;

const Config = require('./../../globalConfig');
const Controller = require('./../../controller/pages/Screens/CheckoutScreen');
const Strings = require('./../../res/string');
const Accessibility = require('./../../res/accessibility');
const Font = require('./../../res/fontStyle');
const Color = require('./../../res/color');
const FontSize = require('./../../res/fontSize');
const FontColor = require('./../../res/fontColor');

class CheckoutScreen extends Controller {

	constructor(props, children, state) {
		super(props, children, state);
		this.STR = Strings();
		this.HINT = Accessibility();
	}

	onPop = () => {}

	render = () => {
		this.layout = (
			<LinearLayout
				height="match_parent"
				width="match_parent"
				orientation="vertical"
				padding="0,139,0,0"
				background={Color.A__FFFFFFFF}
				stroke="1,#000000"
				cornerRadius="0"
				root={true}
				style={this.style_Content}>
				<LinearLayout
					id={this.idSet.ThankyouImage}
					height="360"
					width="match_parent"
					orientation="horizontal"
					gravity="center"
					background={Color.A__FFFFFFFF}
					cornerRadius="0"
					style={this.style_ThankyouImage}>
					<ImageView
						id={this.idSet.Thankyou}
						height="match_parent"
						width="match_parent"
						imageUrl="thankyou"
						style={this.style_Thankyou} />
				</LinearLayout>
			</LinearLayout>
		);
		return this.layout.render();
	}

};

module.exports = CheckoutScreen;
