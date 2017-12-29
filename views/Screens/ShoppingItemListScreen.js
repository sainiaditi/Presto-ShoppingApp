const View = require("presto-ui").baseView;
const dom = require("presto-ui").doms;

const LinearLayout = require("presto-ui").views.LinearLayout;
const TextView = require("presto-ui").views.TextView;
const ScrollView = require("presto-ui").views.ScrollView;
const Button = require('../../components/Button');
const Item = require('../../components/Item');

const Config = require('./../../globalConfig');
const Controller = require('./../../controller/pages/Screens/ShoppingItemListScreen');
const Strings = require('./../../res/string');
const Accessibility = require('./../../res/accessibility');
const Font = require('./../../res/fontStyle');
const Color = require('./../../res/color');
const FontSize = require('./../../res/fontSize');
const FontColor = require('./../../res/fontColor');

let HINT = {};
let STR = {};

class ShoppingItemListScreen extends Controller {

	constructor(props, children, state) {
		super(props, children, state);
		this.STR = Strings();
		this.HINT = Accessibility();
		let ids = ["ScrollView_scroll"];
		this.setIds(ids);
		this.state = state;
	}

	onPop = () => {}

	ItemItem = (data) => {
		let layout = (
			<Item
				parentProps={this.props_Item}
				height="100"
				image={data.toLowerCase()}
				itemName={data}
				width="match_parent" />
		);
		return layout;
	}

	ScrollView_scroll = () => {
		let data = this.state.contents;
		console.log(this.state.contents);
		data.forEach((d, i)=>{
			let view = this.ItemItem(d).render();
			this.appendChild(this.idSet.ScrollView_scroll, view, i, null, false);
		});
	}

	render = () => {
		this.layout = (
			<LinearLayout
				height="match_parent"
				width="match_parent"
				orientation="vertical"
				gravity="center_horizontal"
				padding="0,0,0,30"
				background={Color.A__FFFFFFFF}
				stroke="1,#000000"
				cornerRadius="0"
				root={true}
				style={this.style_Content}>
				<TextView
					id={this.idSet.Header}
					height="54"
					width="match_parent"
					text={this.STR.Header}
					textSize={FontSize.A_30}
					color={FontColor.A__FFD45630}
					fontStyle={Font.SOURCESANSPRO_BOLD}
					gravity="center"
					style={this.style_Header} />
				<ScrollView
					id={this.idSet.ScrollView}
					height="0"
					width="match_parent"
					margin="20,7,20,0"
					weight="1"
					background={Color.A__FFFFFFFF}
					cornerRadius="0"
					style={this.style_ScrollView}>
					<LinearLayout
						id={this.idSet.ScrollView_scroll}
						height="100"
						width="match_parent"
						orientation="vertical"
						gravity="center"
						afterRender={this.ScrollView_scroll}
						style={this.style_ScrollableItems} />
				</ScrollView>
					<LinearLayout
						id={this.idSet.Button}
						height={"50"}
						width={"180"}
						orientation="horizontal"
						gravity="center"
						background={Color.A__FFFFFFFF}
						stroke="2,#d55631"
						cornerRadius="8"
						root={true}
						margin={"0,0,0,0"}
						weight={"0"}
						style={this.style_Button}>
						<TextView
							id={this.idSet.Text}
							height="24"
							width="match_parent"
							text={"Proceed"}
							textSize={FontSize.A_18}
							color={FontColor.A__FFB85E33}
							fontStyle={Font.SOURCESANSPRO_BOLD}
							gravity="center"
							style={this.style_Text} />
					</LinearLayout>
			</LinearLayout>
		);
		return this.layout.render();
	}

};

module.exports = ShoppingItemListScreen;
