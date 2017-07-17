class Reservation extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 10
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event){
        alert(this.state.isGoing + ' - ' + this.state.numberOfGuests);
        event.preventDefault();
    }
    render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <div className="div-test">
                    <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                    </label>
                </div>
                <br />
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        className="input-test"
                        id="input-test"
                        data-role="lichtv"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
  }
}
ReactDOM.render(
  <Reservation />,
  document.getElementById('root')
);