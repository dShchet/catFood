import React from 'react';

class CatCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newSelect: this.props.selected,
      selected: this.props.selected,
      mobile: false
    }
    this.click = this.click.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.buy = this.buy.bind(this);
  }
  onTouchStart(){//check if its mobile
    this.setState({mobile: true})
  }
  click(){
    if(this.state.mobile){
      this.setState({selected: !this.state.selected})
    }else{
      this.setState({newSelect: !this.state.newSelect})
    }
  }
  buy(){
    this.setState({newSelect: !this.state.newSelect})
    this.setState({selected: !this.state.selected})
  }
  onMouseLeave(){
    if((!this.state.mobile)&&(this.state.newSelect !== this.state.selected)){
        this.setState({selected: this.state.newSelect})
    }
  }
  render(){
    let {disabled, weight, children, taste, subText} = this.props;
    let {selected} = this.state;
    let status =`el`;
    if (selected) status+= ' selected';
    if (disabled) status+= ' disabled';
    return (<div className={status} 
      >
      <div className="block" 
        onClick={this.click} 
        onMouseLeave={this.onMouseLeave}
        onTouchStart={this.onTouchStart}  >
        <div className="top-border"></div>
        <div className="top"></div>
        <div className="main">
            <div className="text">
              <p className="sub">Сказочное заморское яство</p>
              <p className="sub-h">Котэ не одобряет?</p>
              <p className="name">Нямушка</p>
              <p className="taste">с {taste}</p>
              {children}
            </div>
            <div className="weight">
              <p>{weight}</p>
              <p>кг</p>
            </div>
        </div>
      </div>
      <p className="subtext">Чего сидишь? Порадуй котэ, <b onClick={this.buy}>купи.</b></p>
      <p className="subtext-s">{subText}</p>
      <p className="subtext-d">Печалька, с {taste} закончился.</p>
    </div>
    )
  }
}

  
export default CatCard;