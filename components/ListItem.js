const View = require("presto-ui").baseView;
const dom = require("presto-ui").doms;

const LinearLayout = require("presto-ui").views.LinearLayout;
const TextView = require("presto-ui").views.TextView;

const Config = require('./../globalConfig');
const Controller = require('./../controller/components/ListItem');
const Strings = require('./../res/string');
const Accessibility = require('./../res/accessibility');
const Font = require('./../res/fontStyle');
const FontColor = require('./../res/fontColor');
const FontSize = require('./../res/fontSize');
const Color = require('./../res/color');

class ListItem extends Controller {

	constructor(props, children, state) {
		super(props, children, state);
		this.STR = Strings();
		this.HINT = Accessibility();
	}

	onPop = () => {}

	render = () => {
		this.layout = (
			<LinearLayout
				id={this.idSet.Item}
				height={this.props.height ? this.props.height:"34"}
				width={this.props.width ? this.props.width:"match_parent"}
				orientation="vertical"
				gravity="center_horizontal"
				root={true}
				margin={this.props.margin ? this.props.margin:"0,0,0,0"}
				weight={this.props.weight ? this.props.weight:"0"}
				style={this.style_Item}>
				<LinearLayout
					id={this.idSet.ItemSummary}
					height="30"
					width="match_parent"
					orientation="horizontal"
					gravity="center_vertical"
					style={this.style_ItemSummary}>
					<TextView
						id={this.idSet.ItemName}
						height="30"
						width="146"
						weight="1"
						text={this.props.itemName}
						textSize={FontSize.A_18}
						color={FontColor.A__FFB85E33}
						fontStyle={Font.SOURCESANSPRO_REGULAR}
						gravity="left"
						style={this.style_ItemName} />
					<TextView
						id={this.idSet.Quantity}
						height="30"
						width="92"
						text={this.props.quantity}
						textSize={FontSize.A_18}
						color={FontColor.A__FFB85E33}
						fontStyle={Font.SOURCESANSPRO_REGULAR}
						gravity="center"
						style={this.style_Quantity} />
					<TextView
						id={this.idSet.Price}
						height="30"
						width="82"
						text={this.props.price}
						textSize={FontSize.A_18}
						color={FontColor.A__FFB85E33}
						fontStyle={Font.SOURCESANSPRO_REGULAR}
						gravity="center"
						style={this.style_Price} />
				</LinearLayout>
				{/* <LinearLayout
					id={this.idSet.Rectangle}
					height="1"
					width="match_parent"
					background={Color.A__FFC9C9C9}
					margin="2,3,2,0"
					cornerRadius="0"
					style={this.style_Rectangle} /> */}
			</LinearLayout>
		);
		return this.layout.render();
	}

};

module.exports = ListItem;
