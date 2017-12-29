const View = require("presto-ui").baseView;
const dom = require("presto-ui").doms;

const LinearLayout = require("presto-ui").views.LinearLayout;
const TextView = require("presto-ui").views.TextView;

const Config = require('./../globalConfig');
const Controller = require('./../controller/components/ListHeader');
const Strings = require('./../res/string');
const Accessibility = require('./../res/accessibility');
const Font = require('./../res/fontStyle');
const FontColor = require('./../res/fontColor');
const FontSize = require('./../res/fontSize');
const Color = require('./../res/color');

class ListHeader extends Controller {

	constructor(props, children, state) {
		super(props, children, state);
		this.STR = Strings();
		this.HINT = Accessibility();
	}

	onPop = () => {}

	render = () => {
		this.layout = (
			<LinearLayout
				id={this.idSet.ListHeader}
				height={this.props.height ? this.props.height:"46"}
				width={this.props.width ? this.props.width:"match_parent"}
				orientation="vertical"
				gravity="center_horizontal"
				root={true}
				margin={this.props.margin ? this.props.margin:"0,0,0,0"}
				weight={this.props.weight ? this.props.weight:"0"}
				style={this.style_ListHeader}>
				<LinearLayout
					id={this.idSet.Group}
					height="34"
					width="match_parent"
					orientation="horizontal"
					gravity="center_vertical"
					style={this.style_Group}>
					<TextView
						id={this.idSet.Item_Name}
						height="34"
						width="146"
						weight="1"
						text={this.STR.Item_Name}
						textSize={FontSize.A_18}
						color={FontColor.A__FFB85E33}
						fontStyle={Font.SOURCESANSPRO_REGULAR}
						gravity="left"
						style={this.style_Item_Name} />
					<TextView
						id={this.idSet.Quantity}
						height="34"
						width="92"
						text={this.STR.Quantity_Q}
						textSize={FontSize.A_18}
						color={FontColor.A__FFB85E33}
						fontStyle={Font.SOURCESANSPRO_REGULAR}
						gravity="center"
						style={this.style_Quantity} />
					<TextView
						id={this.idSet.Price}
						height="34"
						width="82"
						text={this.STR.Price_P}
						textSize={FontSize.A_18}
						color={FontColor.A__FFB85E33}
						fontStyle={Font.SOURCESANSPRO_REGULAR}
						gravity="center"
						style={this.style_Price} />
				</LinearLayout>
				<LinearLayout
					id={this.idSet.Seprator}
					height="1"
					width="match_parent"
					background={Color.A__FFD7D7D7}
					stroke="1,#969696"
					margin="2,11,2,0"
					cornerRadius="0"
					style={this.style_Seprator} />
			</LinearLayout>
		);
		return this.layout.render();
	}

};

module.exports = ListHeader;
