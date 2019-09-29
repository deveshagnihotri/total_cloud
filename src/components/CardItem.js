import React, { useEffect, useState } from 'react';
import data from '../constant/db.json';
import './CardItem.css';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function CardItem() {
  const [apiData, setApiData] = useState([]);
  const [rightList, setRightList] = useState([]);
  const [filterRight, setFilterRight] = useState([]);
  const right = [];
  const removeItem = [];

  useEffect(() => {
    setApiData(data);
  }, []);

  const handleTransfer = item => {
    toast.success('Selected' + ' ' + item.first_name + item.last_name);
    right.push(...rightList, item);
  };

  const handleAssign = () => {
    if (right.length > 0) {
      setRightList([...new Set(right)]);
    }
  };

  const handleSelectRemove = item => {
    toast.warn('Selected ' + item.first_name + item.last_name);
    removeItem.push(...filterRight, item);
    setFilterRight(removeItem);
  };
  console.log(filterRight);

  const handleRemove = () => {
    let result = rightList.filter(
      ar => !filterRight.find(rm => ar.first_name === rm.first_name)
    );
    setRightList(result);
    toast.success('items deleted');
  };
  return (
    <div className="boxs">
      <div class="row">
        <div class="column">
          <div class="card">
            {apiData.map(item => (
              <div className="row row1" onClick={() => handleTransfer(item)}>
                <div style={{ paddingRight: 10 }}>
                  <img
                    src={item.avatar}
                    height={30}
                    width={30}
                    style={{ borderRadius: '50%' }}
                  />
                </div>
                <div>
                  <p>
                    {item.first_name} {item.last_name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div class="column1">
          <div class="column" style={{ flexDirection: 'column' }}>
            <button
              style={{ backgroundColor: 'dodgerblue', color: 'white' }}
              onClick={() => handleAssign()}
            >
              Assign &raquo;
            </button>
            <button
              style={{ backgroundColor: 'dodgerblue', color: 'white' }}
              onClick={() => handleRemove()}
            >
              &laquo; Revoke
            </button>
          </div>
        </div>
        <div class="column3">
          <div class="card">
            {rightList.map(item => (
              <div
                className="row row1"
                onClick={() => handleSelectRemove(item)}
              >
                <div style={{ paddingRight: 10 }}>
                  <img
                    src={item.avatar}
                    height={30}
                    width={30}
                    style={{ borderRadius: '50%' }}
                  />
                </div>
                <div>
                  <p>
                    {item.first_name} {item.last_name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default CardItem;
