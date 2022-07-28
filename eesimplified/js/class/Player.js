class Player {
	constructor() {
		this.energy = new Decimal(200);
		this.maxenergy = new Decimal(200);
		this.gems = new Decimal(0);
		this.items = [];
		this.worlds = {
			home: new Decimal(1),
			small: new Decimal(0),
			medium: new Decimal(0),
			large: new Decimal(0),
			big: new Decimal(0),
			massive: new Decimal(0),
			huge: new Decimal(0),
			great: new Decimal(0),
			verticalgreat: new Decimal(0),
			wide: new Decimal(0),
			tall: new Decimal(0),
			ultrawide: new Decimal(0),
		};
		this.membershipTime = {
			golden: new Decimal(0),
			platinum: new Decimal(0),
		};
		this.campaignsComplete = {};
		this.inCampaign = false;
		this.tab = 'shop';
		this.shoptab = 'featured';
	}


	switchShopTab(tab) {
		let pastTab = this.getShopTab();
		let tabs = ['featured', 'smileys', 'blocks', 'worlds', 'auras', 'npcs', 'classic', 'crew', 'services'];
		if (!tabs.includes(tab) || tab == pastTab) return false;
		
		el(`shop-tab-${pastTab}`).classList.remove('selected');
		el(`shop-tab-${tab}`).classList.add('selected');
	
		el(`items-${pastTab}`).style.display = 'none';
		el(`items-${tab}`).style.display = 'block';
	
		renderShopItems();
	}
	getShopTab() {
		let element = document.querySelector('.shop-tab.selected');
		return element.id.slice(9);
	}
	switchTab(tab) {
		return false;
	}
}