AccountsUIWrapper = React.createClass({
	componentDidMount() {
		this.view = Blaze.render(Template.loginButtons,
			React.findDOMNode(this.refs.container));	
	},
	
	componentWillUnmout() {
		Blaze.remove(this.view);
	},
	
	render() {
		return <span ref="container" />;
	}
});