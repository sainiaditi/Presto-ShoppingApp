const View = require("presto-ui").baseView;
const dom = require("presto-ui").doms;

const LinearLayout = require("presto-ui").views.LinearLayout;
const ImageView = require("presto-ui").views.ImageView;
const TextView = require("presto-ui").views.TextView;
const Decrement = require('./Decrement');
const Increment = require('./Increment');

const Config = require('./../globalConfig');
const Controller = require('./../controller/components/Item');
const Strings = require('./../res/string');
const Accessibility = require('./../res/accessibility');
const Font = require('./../res/fontStyle');
const FontColor = require('./../res/fontColor');
const FontSize = require('./../res/fontSize');
const Color = require('./../res/color');

 window.__itemName = [];
 window.__var = 0;
 window.__itemQuantity = [];
 window.__itemPrice = [];

class Item extends Controller {

	constructor(props, children, state) {
		super(props, children, state);
		this.STR = Strings();
		this.setIds(["A_0"])
		this.HINT = Accessibility();
    window.__itemName = [];
    window.__var = 0;
    window.__itemQuantity = [];
    window.__itemPrice = [];
	}

	onPop = () => {
    console.log("NEVER")
		var index = window.__itemName.indexOf(this.props.itemName);
		var cmd = this.cmd({
			id : this.idSet.A_0,
			text : window.__itemQuantity[index]
		})
		Android.runInUI(cmd,null);
	}

	decrement = () => {
		var quantity = parseInt(this.STR.A_0);
		if(quantity > 0 ){
			this.STR.A_0 = quantity - 1;
			quantity = this.STR.A_0;
			if(quantity == 0){
				window.__var--;
				var index = window.__itemName.indexOf(this.props.itemName);
				window.__itemName.splice(index,1);
				window.__itemQuantity.splice(index,1);
				window.__itemPrice.splice(index,1);
				console.log(window.__itemName,window.__itemQuantity,window.__itemPrice);
			}else{
				var index = window.__itemName.indexOf(this.props.itemName);
				window.__itemQuantity[index] = quantity;
				window.__itemPrice[index] = quantity*12;
				console.log(window.__itemName,window.__itemQuantity,window.__itemPrice);
			}

			var cmd = this.cmd({
				id: this.idSet.A_0,
				text : this.STR.A_0
			})
			Android.runInUI(cmd,null)
		} else{
			this.STR.A_0 = 0;
			console.log("Quantity can not be less than 0");
	}
}

	increment = () => {
		var quantity = parseInt(this.STR.A_0);
		this.STR.A_0 = quantity + 1;
		quantity = this.STR.A_0;
		if(quantity == 1){
			window.__itemName[window.__var] = this.props.itemName;
			window.__itemQuantity[window.__var] = quantity;
			window.__itemPrice[window.__var++] = quantity*12;
			console.log(window.__itemName,window.__itemQuantity,window.__itemPrice);
		}else{
			var index = window.__itemName.indexOf(this.props.itemName);
			window.__itemQuantity[index] = quantity;
			window.__itemPrice[index] = quantity*12;
			console.log(window.__itemName,window.__itemQuantity,window.__itemPrice);
		}
		var cmd = this.cmd({
			id: this.idSet.A_0,
			text : this.STR.A_0
		})
		Android.runInUI(cmd,null)
	}

	render = () => {
		this.layout = (
			<LinearLayout
				id={this.idSet.Item}
				height={this.props.height ? this.props.height:"100"}
				width={this.props.width ? this.props.width:"match_parent"}
				orientation="vertical"
				gravity="center_horizontal"
				padding="0,12,0,0"
				cornerRadius="0"
				root={true}
				margin={this.props.margin ? this.props.margin:"0,0,0,0"}
				weight={this.props.weight ? this.props.weight:"0"}
				style={this.style_Item}>
				<LinearLayout
					id={this.idSet.AllInOne}
					height="81"
					width="match_parent"
					orientation="horizontal"
					style={this.style_AllInOne}>
					<LinearLayout
						id={this.idSet.ItemAndImage}
						height="81"
						width="257"
						orientation="horizontal"
						weight="1"
						style={this.style_ItemAndImage}>
						<ImageView
							id={this.idSet.Bucket}
							height="81"
							width="86"
							imageUrl={this.props.image}
							style={this.style_Bucket} />
						<TextView
							id={this.idSet.Item_1}
							height="30"
							width="171"
							margin="0,25,0,0"
							weight="1"
							text={this.props.itemName}
							textSize={FontSize.A_24}
							color={FontColor.A__FFB85E33}
							fontStyle={Font.SOURCESANSPRO_REGULAR}
							gravity="left"
							style={this.style_Item_1} />
					</LinearLayout>
					<LinearLayout
						id={this.idSet.PriceAndQuantity}
						height="55"
						width="63"
						orientation="vertical"
						gravity="center_horizontal"
						style={this.style_PriceAndQuantity}>
						<TextView
							id={this.idSet.A_12_Rs__}
							height="15"
							width="match_parent"
							margin="13,0,13,0"
							text={this.STR.A_12_Rs__}
							textSize={FontSize.A_12}
							color={FontColor.A__FFD45630}
							fontStyle={Font.SOURCESANSPRO_REGULAR}
							gravity="center"
							style={this.style_A_12_Rs__} />
						<LinearLayout
							id={this.idSet.Quantity}
							height="31"
							width="match_parent"
							orientation="horizontal"
							margin="0,9,0,0"
							style={this.style_Quantity}>
								<ImageView
									id={this.idSet.Decrement}
									height={"16"}
									width={"16"}
									imageUrl="decrement"
									margin={"0,8,0,0"}
									onClick={this.decrement}
									weight={"0"}
									style={this.style_Decrement} />
							<TextView
								id={this.idSet.A_0}
								height="31"
								width="12"
								margin="9,0,0,0"
								text={this.STR.A_0}
								textSize={FontSize.A_24}
								color={FontColor.A__FFD45630}
								fontStyle={Font.SOURCESANSPRO_REGULAR}
								gravity="center"
								style={this.style_A_0} />
								<ImageView
									id={this.idSet.Increment}
									height={"16"}
									width={"16"}
									imageUrl="increment"
									onClick={this.increment}
									margin={"10,8,0,0"}
									weight={"0"}
									style={this.style_Increment} />
						</LinearLayout>
					</LinearLayout>
				</LinearLayout>
				<LinearLayout
					id={this.idSet.Seprator}
					height="1"
					width="match_parent"
					background={Color.A__FFD7D7D7}
					stroke="1,#969696"
					margin="7,5,7,0"
					cornerRadius="0"
					style={this.style_Seprator} />
			</LinearLayout>
		);
		return this.layout.render();
	}

};

module.exports = Item;
