var React = require('react');

var Product = React.createClass({
    getInitialState: function() {
        return {qty: 0};
    },
    buy: function() {
        this.setState({
            qty: this.state.qty + 1
        });
        this.props.handleTotal(this.props.Price);
    },
    show: function() {
        this.props.handleShow(this.props.name);

    },
    remove: function() {
        if (this.state.qty > 0) {
            this.setState({
                qty: this.state.qty - 1
            });
            this.props.handleRemove(this.props.Price);
        } else {
            alert("You have nothing to remove. please buy the item first");
        }

    },
    render: function() {
        var name = this.props.name;
        var price = this.props.Price;
        return (
            <div className="row " data-equalizer data-equalizer-by-row="true">
                <div >
                    <div>
                        <h5 className="message">{name}- ${price}
                        </h5>
                    </div>
                    <div className="tiny btn ">
                        <button className="button  tiny btn " onClick={this.buy}>Buy</button>
                        <button className="button  tiny btn" onClick={this.show}>Show</button>
                        <button className="button  tiny btn" onClick={this.remove}>Remove</button>
                    </div>
                    <div className="message" >
                        <h6 >
                            Qty : {this.state.qty}
                            Item(s) </h6>
                    </div>

                    <hr/>
                </div>
            </div>
        );
    }

});

module.exports = Product;
