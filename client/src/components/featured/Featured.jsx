import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://www.ca.kayak.com/rimg/himg/f6/70/55/ice-65961-photo.aspx_did=2692_brochureid=65961_publicid=56908896_instanceid=28_resizing=4K-819702.jpg?width=1366&height=768&crop=true"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://media.cntraveler.com/photos/60f6b4cb645e521f9f7bfe0f/master/w_5000,h_2902,c_limit/ARRIVE%20Austin_2019%20Aug%2014%20Exterior%201.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Madrid</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://www.royalparks.org.uk/parks/st-jamess-park/things-to-see-and-do/monuments-fountains-and-statues/the-queen-victoria-memorial/_gallery/Memorial-Gardens-from-Australia-Gate.jpg/w_1200.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>London</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;