import React, { useEffect, useState } from "react";

function CountDown({ setIsDisable }) {
  const [count, setCount] = useState(60);

  useEffect(() => {
    if (count === 0) {
      setIsDisable(true);
      alert("OTP hết hạn");
      return;
    }
    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);
  return <div>{count}</div>;
}

// class CountDown extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 10,
//     };
//   }
//   componentDidMount() {
//     this.CountDown();
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.count === 0 && this.state.count !== prevState.count) {
//       if (this.timer) {
//         clearInterval(this.timer);
//       }
//     }
//   }
//   CountDown() {
//     this.timer = setInterval(() => {
//       this.setState({ count: this.state.count - 1 });
//     }, 1000);
//   }
//   render() {
//     return <div>{this.state.count}</div>;
//   }
// }
export default CountDown;
