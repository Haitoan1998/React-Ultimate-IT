import React, { useEffect, useState } from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valuse: [],
    };
  }
  componentDidMount() {
    //chay 1 lần khi component dc mount
  }
  componentDidUpdate() {
    //chạy khi component setstate
  }
  render() {
    return <h1>xin chaog</h1>;
  }
}

import React from "react";

export default function LifeCycle() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    //component didmount when dependency =[]
    //component didupdate when dependency = [value]
    return () => {
      //component will unMountComponent
    };
  }, []);
  return <div>xin chaog</div>;
}
