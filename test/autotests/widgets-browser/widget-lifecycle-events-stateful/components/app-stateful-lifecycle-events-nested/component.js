module.exports = {
	onInput: function(input) {
		this.state = {
			messageCount: input.messageCount,
			name: input.name
		};
	},

	init: function() {
		if (this.INIT_CALLED) {
			throw new Error('Doublie init()');
		}
		this.INIT_CALLED = true;
		window.recordWidgetLifecycleEvent(this.state.name || this.id, 'init');
	},

	onMount: function() {
		window.recordWidgetLifecycleEvent(this.state.name || this.id, 'mount');
	},

	setMessageCount: function(messageCount) {
		this.setState('messageCount', messageCount);
	},

	onRender: function(eventArg) {
		window.recordWidgetLifecycleEvent(this.state.name || this.id, eventArg.firstRender ? 'onRender:firstRender' : 'onRender');
	},

	onBeforeDestroy: function() {
		window.recordWidgetLifecycleEvent(this.state.name || this.id, 'onBeforeDestroy');
	},

	onDestroy: function() {
		window.recordWidgetLifecycleEvent(this.state.name || this.id, 'onDestroy');
	},

	onBeforeUpdate: function() {
		window.recordWidgetLifecycleEvent(this.state.name || this.id, 'onBeforeUpdate');
	},

	onUpdate: function() {
		window.recordWidgetLifecycleEvent(this.state.name || this.id, 'onUpdate');
	}
};