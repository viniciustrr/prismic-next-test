/* eslint-disable @next/next/no-img-element */
import { BlogPost } from '../../types/prismic'
import styles from './styles.module.scss'
import {UserIcon} from "../../assets/svg";
import {CalendarIcon} from "../../assets/svg";
import { RichText } from 'prismic-reactjs'
import { formatDate } from '../../utils/formats';




function PostPageView({ blogPost }: {blogPost:BlogPost}) {

const {data,last_publication_date}  = blogPost;
 return (

   <div className={styles.PostPageView}>
    <div className={styles.PostPageBanner}>
        <img src={data.banner.url} alt={data.banner.alt} />
    </div>
    <div className={styles.PostPageContainer}>
        <div className={styles.PostPageTitle}>
            <h1>
                {data.title}
            </h1>
            <div className={styles.PostPageInfo} >
                <div className={styles.PostPageIconInfo}>
                    <CalendarIcon/>
                    {formatDate(last_publication_date)}
                </div>
                <div className={styles.PostPageIconInfo}>
                    <UserIcon/>
                    {data.author}
                </div>
            </div>
        </div>

        <div className={styles.PostPageBody}>
        {
            data.content.map((item)=>{
                return (
                  <div key={item.heading} className={styles.PostPageContent}>
                    <h2>{item.heading}</h2>
                    
                    <div className={styles.PostPageRichText}>
                        <RichText  render={item.body}/>    
                    </div>    
                       
                    
                  </div>  
                )
            })
        }
        </div>
    </div>
   </div>
)}

export default PostPageView