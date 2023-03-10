
import {  Avatar, Divider, List, Skeleton  } from "antd"
import { useEffect,useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import "./rightlist.css"
const RightList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    loadMoreData();
  }, []);
  return (
    <div
      id="scrollableDiv"
      style={{
        
        height: 400,
        width:300,
        overflow: 'auto',
        padding: '0 16px',
        
      }}
    >
      sdfsdfsd
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        loader={
          <Skeleton
            avatar
            paragraph={{
              rows: 1,
            }}
            active
          />
        }
        endMessage={<Divider plain>END</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item}>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name.last}</a>}
                
              />
              <div>Content</div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
}
export default RightList