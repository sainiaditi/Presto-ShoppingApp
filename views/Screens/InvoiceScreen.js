const View = require("presto-ui").baseView;
const dom = require("presto-ui").doms;

const LinearLayout = require("presto-ui").views.LinearLayout;
const HeaderWithBack = require('../../components/HeaderWithBack');
const TextView = require("presto-ui").views.TextView;
const ListHeader = require('../../components/ListHeader');
const ScrollView = require("presto-ui").views.ScrollView;
const Button = require('../../components/Button');
const ListItem = require('../../components/ListItem');

const Config = require('./../../globalConfig');
const Controller = require('./../../controller/pages/Screens/InvoiceScreen');
const Strings = require('./../../res/string');
const Accessibility = require('./../../res/accessibility');
const Font = require('./../../res/fontStyle');
const Color = require('./../../res/color');
const FontSize = require('./../../res/fontSize');
const FontColor = require('./../../res/fontColor');
var totalAmount=0;
class InvoiceScreen extends Controller {

	constructor(props, children, state) {
		super(props, children, state);
		this.STR = Strings();
		this.HINT = Accessibility();
		let ids = ["ScrollView_scroll"];
		this.state = state;
		this.setIds(ids);
		totalAmount=0;
		for(var i=0;i<window.__var;i++){
			totalAmount+=window.__itemPrice[i];
		}
	}

	onPop = () => {}

	ListItemItem = (data) => {
		let layout = (
			<ListItem
				parentProps={this.props_ListItem}
				height="34"
				itemName={data.name}
				quantity={data.quantity}
				price={data.price}
				width="match_parent" />
		);
		return layout;
	}

	ScrollView_scroll = () => {
		let data = this.state.contents;
		data.forEach((d, i)=>{
			let view = this.ListItemItem(d).render();
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
				cornerRadius="0"
				root={true}
				style={this.style_Content}>
				<HeaderWithBack
					parentProps={this.props_HeaderWithBack}
					height="54"
					width="match_parent" />
				<TextView
					id={this.idSet.Text}
					height="48"
					width="match_parent"
					margin="20,20,20,0"
					text={this.STR.text_Y}
					textSize={FontSize.A_24}
					color={FontColor.A__FFB85E33}
					fontStyle={Font.SOURCESANSPRO_REGULAR}
					gravity="left"
					style={this.style_Text} />
				<ListHeader
					parentProps={this.props_ListHeader}
					height="46"
					width="match_parent"
					margin="20,0,20,0" />
				<ScrollView
					id={this.idSet.ScrollView}
					height="0"
					width="match_parent"
					margin="20,30,20,0"
					weight="1"
					background={Color.A__FFFFFFFF}
					cornerRadius="0"
					style={this.style_ScrollView}>
					<LinearLayout
						id={this.idSet.ScrollView_scroll}
						height="34"
						width="match_parent"
						orientation="vertical"
						gravity="center"
						afterRender={this.ScrollView_scroll}
						style={this.style_ScrollView} />
				</ScrollView>
				<LinearLayout
					id={this.idSet.Total}
					height="40"
					width="match_parent"
					stroke="1,#969696"
					orientation="horizontal"
					margin="20,20,20,0"
					style={this.style_Total}>
					<TextView
						id={this.idSet.AmountPayable}
						height="40"
						width="222"
						weight="1"
						text={this.STR.Amount_payable__}
						textSize={FontSize.A_18}
						color={FontColor.A__FFB85E33}
						fontStyle={Font.SOURCESANSPRO_REGULAR}
						gravity="right"
						style={this.style_AmountPayable} />
					<TextView
						id={this.idSet.Amount}
						height="40"
						width="98"
						text={totalAmount + " Rs"}
						textSize={FontSize.A_18}
						color={FontColor.A__FFB85E33}
						fontStyle={Font.SOURCESANSPRO_REGULAR}
						gravity="right"
						style={this.style_Amount} />
				</LinearLayout>
				<Button
					parentProps={this.props_InvoiceProceedButton}
					height="50"
					width="180"
					margin="0,10,0,0"
					Text="Proceed" />
			</LinearLayout>
		);
		return this.layout.render();
	}

};

module.exports = InvoiceScreen;
