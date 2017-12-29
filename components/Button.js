const View = require("presto-ui").baseView;
const dom = require("presto-ui").doms;

const LinearLayout = require("presto-ui").views.LinearLayout;
const TextView = require("presto-ui").views.TextView;

const Config = require('./../globalConfig');
const Controller = require('./../controller/components/Button');
const Strings = require('./../res/string');
const Accessibility = require('./../res/accessibility');
const Font = require('./../res/fontStyle');
const FontColor = require('./../res/fontColor');
const FontSize = require('./../res/fontSize');
const Color = require('./../res/color');

class Button extends Controller {

	constructor(props, children, state) {
		super(props, children, state);
		this.STR = Strings();
		this.HINT = Accessibility();
	}

	onPop = () => {}

	render = () => {
		let Text = (this.props.Text) ? this.props.Text : this.Text;
		this.layout = (
			<LinearLayout
				id={this.idSet.Button}
				height={this.props.height ? this.props.height:"50"}
				width={this.props.width ? this.props.width:"match_parent"}
				orientation="horizontal"
				gravity="center"
				background={Color.A__FFFFFFFF}
				stroke="2,#d55631"
				cornerRadius="8"
				root={true}
				margin={this.props.margin ? this.props.margin:"0,0,0,0"}
				weight={this.props.weight ? this.props.weight:"0"}
				style={this.style_Button}>
				<TextView
					id={this.idSet.Text}
					height="24"
					width="match_parent"
					text={Text}
					textSize={FontSize.A_18}
					color={FontColor.A__FFB85E33}
					fontStyle={Font.SOURCESANSPRO_BOLD}
					gravity="center"
					style={this.style_Text} />
			</LinearLayout>
		);
		return this.layout.render();
	}

};

module.exports = Button;
