import Image from "next/image";
import Slider from "react-slick";
import styles from "./styles.module.css";

const TreatmentDiagnosis = ({ data, slug = "treatment" }) => {
   const treatmentSliderSettings = {
     dots: true,
     arrows: false,
     infinite: true,
     autoplay: true,
     autoplaySpeed: 2500,
     speed: 600,
     slidesToShow: 2.5,
     slidesToScroll: 1,
     pauseOnHover: true,
     responsive: [
       {
         breakpoint: 992,
         settings: {
           slidesToShow: 2,
         },
       },
       {
         breakpoint: 768,
         settings: {
           slidesToShow: 1.5,
         },
       },
       {
         breakpoint: 576,
         settings: {
           slidesToShow: 1,
         },
       },
     ],
   };
 
   const renderTreatmentCard = (item, isSlider = false) => (
     <article
       className={`${styles["squint-diagnosis__treatment-card"]} ${
         item.highlighted
           ? styles["squint-diagnosis__treatment-card--highlight"]
           : ""
       }`}
       key={item.number}
     >
       <Image
         src={isSlider && item.sliderImage ? item.sliderImage : item.image}
         alt={item.alt}
         width={item.highlighted ? 3816 : 1755}
         height={item.highlighted ? 1569 : 1875}
         className={styles["squint-diagnosis__treatment-image"]}
       />
       <div className={styles["squint-diagnosis__treatment-content"]}>
         <h3>
           <span>{item.number}</span> {item.title}
         </h3>
         <p>{item.description}</p>
       </div>
     </article>
   );
 
   return (
     <section
       className={styles["squint-diagnosis"]}
       aria-labelledby={`${slug}-diagnosis-title`}
     >
       <div
         className={styles["squint-diagnosis__panel"]}
         style={data.bgImage ? { backgroundImage: `url('${data.bgImage}')` } : undefined}
       >
         <div className={styles["squint-diagnosis__copy"]}>
           <h2 id={`${slug}-diagnosis-title`}>{data.title}</h2>
           {data.paragraphs.map((paragraph, i) => (
             <p key={i}>{paragraph}</p>
           ))}
         </div>
 
         <div className={styles["squint-diagnosis__media-list"]}>
           {(data.media || []).map((item) => (
             <figure
               className={styles["squint-diagnosis__media-card"]}
               key={item.title}
             >
               <div className={styles["squint-diagnosis__media-frame"]}>
                 <Image
                   src={item.image}
                   alt={item.alt}
                   width={1779}
                   height={792}
                   className={styles["squint-diagnosis__media-image"]}
                 />
                 {/* <PlayIcon /> */}
               </div>
               <figcaption className={styles["squint-diagnosis__media-label"]}>
                 {item.title}
               </figcaption>
             </figure>
           ))}
         </div>
       </div>
 
       <div className={styles["squint-diagnosis__treatments"]}>
         {(data.treatments || []).map((item) => renderTreatmentCard(item, false))}
       </div>
 
       <div className={styles["squint-diagnosis__treatment-slider"]}>
         <Slider {...treatmentSliderSettings}>
           {(data.treatments || []).map((item) => renderTreatmentCard(item, true))}
         </Slider>
       </div>
     </section>
   );
 };

export default TreatmentDiagnosis;
