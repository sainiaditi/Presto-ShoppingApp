const View = require("presto-ui").baseView;
const dom = require("presto-ui").doms;

const LinearLayout = require("presto-ui").views.LinearLayout;
const TextView = require("presto-ui").views.TextView;

const Config = require('./../../globalConfig');
const Controller = require('./../../controller/pages/Screens/SplashScreen');
const Strings = require('./../../res/string');
const Accessibility = require('./../../res/accessibility');
const Font = require('./../../res/fontStyle');
const Color = require('./../../res/color');
const FontSize = require('./../../res/fontSize');
const FontColor = require('./../../res/fontColor');

class SplashScreen extends Controller {

	constructor(props, children, state) {
		super(props, children, state);
		this.STR = Strings();
		this.HINT = Accessibility();
	}

	onPop = () => {}

	afterRender = () => {
		setTimeout(()=> {
			window.__runDuiCallback(JSON.stringify({tag:"SplashScreenRendered"}));
		},2000)
	}

	render = () => {
		this.layout = (
			<LinearLayout
				height="match_parent"
				width="match_parent"
				orientation="vertical"
				padding="0,273,0,0"
				background={Color.A__FFFFFFFF}
				stroke="1,#000000"
				cornerRadius="0"
				root={true}
				style={this.style_Content}>
				<LinearLayout
					id={this.idSet.Title}
					height="93"
					width="match_parent"
					orientation="vertical"
					gravity="center_horizontal"
					style={this.style_Title}>
					<TextView
						id={this.idSet.MainTitle}
						height="45"
						width="match_parent"
						text={this.STR.MainTitle}
						textSize={FontSize.A_36}
						color={FontColor.A__FFD55531}
						fontStyle={Font.SOURCESANSPRO_BOLD}
						gravity="center"
						style={this.style_MainTitle} />
					<TextView
						id={this.idSet.SubTitle}
						height="31"
						width="match_parent"
						margin="0,17,0,0"
						text={this.STR.SubTitle}
						textSize={FontSize.A_24}
						color={FontColor.A__FFB75D33}
						fontStyle={Font.SOURCESANSPRO_REGULAR}
						gravity="center"
						style={this.style_SubTitle} />
				</LinearLayout>
			</LinearLayout>
		);
		return this.layout.render();
	}

};

module.exports = SplashScreen;
