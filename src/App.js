import logo from './logo.svg';
import './App.css';
import Layout1 from './Components/Layout/Layout1';
import DataBinding from './Components/DataBinding/DataBinding';
import HandleEvent from './Components/HandleEvent/HandleEvent'
import StateDemo from './Components/StateDemo/StateDemo'
import StyleComponent from './Components/StyleComponent/StyleComponent';
import RenderArray from './Components/RenderArray/RenderArray'
import DemoProps from './Components/Props/DemoProps/DemoProps'
import ShoeShop from './Components/Props/ShoeShop/ShoeShop'
import XemChiTiet from './Components/Props/XemChiTiet/XemChiTiet';
import TangGiamSoLuong from './DemoRedux/TangGiamSoLuong/TangGiamSoLuong';
import BTChonXe from './DemoRedux/BTChonXeRedux/BTChonXe';
import BTGioHangRedux from './DemoRedux/BTGioHangRedux/BTGioHangRedux';

function App() {
  return (
    <div className="App">
      {/* <Layout1 /> */}
      {/* <DataBinding /> */}
      {/* <HandleEvent /> */}
      {/* <StateDemo /> */}
      {/* <StyleComponent />
      <p>App</p> */}
      {/* <RenderArray /> */}
      {/* <DemoProps /> */}
      {/* <ShoeShop /> */}
      {/* <XemChiTiet /> */}
      {/* <TangGiamSoLuong /> */}
      {/* <BTChonXe /> */}

      <BTGioHangRedux />
    </div>
  );
}

export default App;
