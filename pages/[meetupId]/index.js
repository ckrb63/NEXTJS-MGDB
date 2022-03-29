import { Fragment } from "react/cjs/react.production.min";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const DetailPage = (props) => {
  return (
    <MeetupDetail
      image={props.image}
      id={props.id}
      title={props.title}
      address={props.address}
      description={props.description}
    />
  );
};

export default DetailPage;

export function getStaticPaths(){
  return {
    fallback: true,
    paths:[{
      params: {
        meetupId:"m1"
      }
    }]
  }
};

export function getStaticProps(context){
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props:{
      image:"https://src.hidoc.co.kr/image/lib/2021/4/28/1619598179113_0.jpg",
      title:"First Meetup",
      address:"some street",
      description:"this is meetup",
      id:meetupId
    }
  }
}