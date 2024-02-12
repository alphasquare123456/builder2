'use client'
import React, { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import plugin from 'grapesjs-preset-newsletter';
import '../public/assets/css/custom_builder.css'

export default function Home() {
  const editorRef = useRef(null);

  useEffect(() => {

    const editor = grapesjs.init({
      showOffsets: 1,
      noticeOnUnload: 0,
      container: '#gjs',
      fromElement: true, // Load existing content from the container
      stepsBeforeSave: 0, // Set to 0 to trigger autoload
      // For example:
      storageManager: { autoload: 0 },
      styleManager : {
        sectors: [{
            name: 'General',
            open: false,
            buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom']
          },{
            name: 'Flex',
            open: false,
            buildProps: ['flex-direction', 'flex-wrap', 'justify-content', 'align-items', 'align-content', 'order', 'flex-basis', 'flex-grow', 'flex-shrink', 'align-self']
          },{
            name: 'Dimension',
            open: false,
            buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
          },{
            name: 'Typography',
            open: false,
            buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-shadow'],
          },{
            name: 'Decorations',
            open: false,
            buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
          },{
            name: 'Extra',
            open: false,
            buildProps: ['transition', 'perspective', 'transform'],
          }
        ],
      },
      plugins: [plugin],
      pluginsOpts: {
        [plugin]: { /* options */ },
      },
     
     
    });
    
  //   editor.addComponents({
  //     type: 'text',
  //      classes:['cls'],
  //      content: 'Your custom HTML content goes here',
  //       style: {
  //         // Add any additional styling properties as needed
  //         color: 'black',
  //         'font-size': '36px',
  //       },
  //    })
  //    editor.addComponents({
  //     type: 'image',
  //      classes:['cls'],
  //      content: 'New componesssssssssssssnt'
  //    })
  //    editor.addComponents({
  //     type: 'text',
  //      classes:['cls'],
  //      content: 'New componesst'
  //    })
  //  // Save the editor instance to the ref
  //  editorRef.current = editor;

  // const components = [
  //   {
  //     type: 'text',
  //     content: '<!doctypehtml><html lang=en><meta charset=UTF-8><meta content="width=device-width,initial-scale=1"name=viewport><title>Email Template</title><table cellpadding=0 cellspacing=0 class=container><tr><td><h1>Hello!</h1><p>This is a sample email template.<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta sapien ac tortor placerat, nec convallis quam porta. Curabitur sodales vestibulum turpis, eu aliquet dolor finibus nec.<p>Ut vel dui quis nisl fermentum fringilla sed nec ligula. Cras non ullamcorper neque. Mauris euismod aliquet massa, ac dignissim libero suscipit eu.</p><a class=button href=# style="display:inline-block;padding:10px 20px;background-color:#007bff;color:#fff;text-decoration:none;border-radius:4px">Click Me</a></table>',
     
  //   },
   
  //   // Add more components as needed
  // ];

    

  // // Add components to the editor
  // editor.addComponents(components);

  // Load the template HTML content
  const templateContent = `
  <div>
   
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="x-apple-disable-message-reformatting">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>[site_name]</title>
<style type="text/css"> a { text-decoration: none; outline: none; } @media (max-width: 649px) { .o_col-full { max-width: 100% !important; } .o_col-half { max-width: 50% !important; } .o_hide-lg { display: inline-block !important; font-size: inherit !important; max-height: none !important; line-height: inherit !important; overflow: visible !important; width: auto !important; visibility: visible !important; } .o_hide-xs, .o_hide-xs.o_col_i { display: none !important; font-size: 0 !important; max-height: 0 !important; width: 0 !important; line-height: 0 !important; overflow: hidden !important; visibility: hidden !important; height: 0 !important; } .o_xs-center { text-align: center !important; } .o_xs-left { text-align: left !important; } .o_xs-right { text-align: left !important; } table.o_xs-left { margin-left: 0 !important; margin-right: auto !important; float: none !important; } table.o_xs-right { margin-left: auto !important; margin-right: 0 !important; float: none !important; } table.o_xs-center { margin-left: auto !important; margin-right: auto !important; float: none !important; } h1.o_heading { font-size: 32px !important; line-height: 41px !important; } h2.o_heading { font-size: 26px !important; line-height: 37px !important; } h3.o_heading { font-size: 20px !important; line-height: 30px !important; } .o_xs-py-md { padding-top: 24px !important; padding-bottom: 24px !important; } .o_xs-pt-xs { padding-top: 8px !important; } .o_xs-pb-xs { padding-bottom: 8px !important; } } @media screen { @font-face { font-family: 'Roboto'; font-style: normal; font-weight: 400; src: local("Roboto"), local("Roboto-Regular"), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format("woff2"); unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; } @font-face { font-family: 'Roboto'; font-style: normal; font-weight: 400; src: local("Roboto"), local("Roboto-Regular"), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2) format("woff2"); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; } @font-face { font-family: 'Roboto'; font-style: normal; font-weight: 700; src: local("Roboto Bold"), local("Roboto-Bold"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfChc4EsA.woff2) format("woff2"); unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; } @font-face { font-family: 'Roboto'; font-style: normal; font-weight: 700; src: local("Roboto Bold"), local("Roboto-Bold"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfBBc4.woff2) format("woff2"); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; } .o_sans, .o_heading { font-family: "Roboto", sans-serif !important; } .o_heading, strong, b { font-weight: 700 !important; } a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; } } </style>
<!--[if mso]> 
<style> table { border-collapse: collapse; } .o_col { float: left; } </style>
<xml>
   <o:OfficeDocumentSettings>
      <o:PixelsPerInch>96</o:PixelsPerInch>
   </o:OfficeDocumentSettings>
</xml>
<![endif]--> <!-- preview-text --> 
<table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
   <tbody>
      <tr>
         <td class="o_hide" align="center" style="display: none;font-size: 0;max-height: 0;width: 0;line-height: 0;overflow: hidden;mso-hide: all;visibility: hidden;">Email Summary (Hidden)</td>
      </tr>
   </tbody>
</table>
<!-- header-primary --> 
<table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
   <tbody>
      <tr>
         <td class="o_bg-light o_px-xs o_pt-lg o_xs-pt-xs" align="center" style="background-color: #dbe5ea;padding-left: 8px;padding-right: 8px;padding-top: 32px;">
            <!--[if mso]>
            <table width="632" cellspacing="0" cellpadding="0" border="0" role="presentation">
               <tbody>
                  <tr>
                     <td>
                        <![endif]--> 
                        <table class="o_block" width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="max-width: 632px;margin: 0 auto;">
                           <tbody>
                              <tr>
                                 <td class="o_bg-primary o_px o_py-md o_br-t o_sans o_text" align="center" style="font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 16px;line-height: 24px;background-color: #000;border-radius: 4px 4px 0px 0px;padding-left: 16px;padding-right: 16px;padding-top: 24px;padding-bottom: 24px;">
                                    <p style="margin-top: 0px;margin-bottom: 0px;"><a class="o_text-white" style="text-decoration: none;outline: none;color: #ffffff;"><img src="https://d1i31jgmhbsknz.cloudfront.net/uploads/dashboard/g2g_logo.png" width="136" height="36" alt="SimpleApp" style="max-width: 136px;-ms-interpolation-mode: bicubic;vertical-align: middle;border: 0;line-height: 100%;height: auto;outline: none;text-decoration: none;"></a></p>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <!--[if mso]>
                     </td>
                  </tr>
            </table>
            <![endif]--> 
         </td>
      </tr>
   </tbody>
</table>
<!-- hero-white-icon-outline --> 
<table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
   <tbody>
      <tr>
         <td class="o_bg-light o_px-xs" align="center" style="background-color: #dbe5ea;padding-left: 8px;padding-right: 8px;">
            <!--[if mso]>
            <table width="632" cellspacing="0" cellpadding="0" border="0" role="presentation">
               <tbody>
                  <tr>
                     <td>
                        <![endif]--> 
                        <table class="o_block" width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="max-width: 632px;margin: 0 auto;">
                           <tbody>
                              <tr>
                                 <td class="o_bg-white o_px-md o_py-xl o_xs-py-md o_sans o_text-md o_text-light" align="center" style="font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 19px;line-height: 28px;background-color: #ffffff;color: #82899a;padding-left: 24px;padding-right: 24px;padding-top: 64px;padding-bottom: 64px;">
                                    <table cellspacing="0" cellpadding="0" border="0" role="presentation">
                                       <tbody>
                                          <tr>
                                             <td class="o_sans o_text o_text-secondary o_b-primary o_px o_py o_br-max" align="center" style="font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 16px;line-height: 24px;color: #424651;border: 2px solid #b79720;border-radius: 96px;padding-left: 16px;padding-right: 16px;padding-top: 16px;padding-bottom: 16px;"> <img src="https://d1i31jgmhbsknz.cloudfront.net/uploads/dashboard/check_48_primary_1.png" width="48" height="48" alt="" style="max-width: 48px;-ms-interpolation-mode: bicubic;vertical-align: middle;border: 0;line-height: 100%;height: auto;outline: none;text-decoration: none;"> </td>
                                          </tr>
                                          <tr>
                                             <td style="font-size: 24px; line-height: 24px; height: 24px;">&nbsp; </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                    <h2 class="o_heading o_text-dark o_mb-xxs" style="font-family: Helvetica, Arial, sans-serif;font-weight: bold;margin-top: 0px;margin-bottom: 4px;color: #242b3d;font-size: 30px;line-height: 39px;">Payment Successful</h2>
                                    <p style="margin-top: 0px;margin-bottom: 0px;color:#424651;margin-top: 15px;">Congratulations on the purchase of your new Business <br>Center with [site_name]!</p>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <!--[if mso]>
                     </td>
                  </tr>
            </table>
            <![endif]--> 
         </td>
      </tr>
   </tbody>
</table>
<!-- invoice-details-primary --> 
<table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
   <tbody>
      <tr>
         <td class="o_bg-light o_px-xs" align="center" style="background-color: #dbe5ea;padding-left: 8px;padding-right: 8px;">
            <!--[if mso]>
            <table width="632" cellspacing="0" cellpadding="0" border="0" role="presentation">
               <tbody>
                  <tr>
                     <td>
                        <![endif]--> 
                        <table class="o_block" width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="max-width: 632px;margin: 0 auto;">
                           <tbody>
                              <tr>
                                 <td class="o_re o_bg-primary o_px o_pb-md" align="center" style="font-size: 0;vertical-align: top;background-color: #b79720;padding-left: 16px;padding-right: 16px;padding-bottom: 24px;">
                                    <!--[if mso]>
                                    <table cellspacing="0" cellpadding="0" border="0" role="presentation">
                                       <tbody>
                                          <tr>
                                             <td width="400" align="center" valign="top" style="padding: 0px 8px;">
                                                <![endif]--> 
                                                <div class="o_col o_col-4 o_col-full" style="display: inline-block;vertical-align: top;width: 100%;max-width: 400px;">
                                                   <div style="font-size: 24px; line-height: 24px; height: 24px;">&nbsp; </div>
                                                   <div class="o_px-xs o_sans o_text o_text-white o_left o_xs-center" style="font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 16px;line-height: 24px;color: #ffffff;text-align: left;padding-left: 8px;padding-right: 8px;">
                                                      <h3 class="o_heading o_mb-xxs" style="font-family: Helvetica, Arial, sans-serif;font-weight: bold;margin-top: 0px;margin-bottom: 4px;font-size: 18px;line-height: 31px;font-weight: unset !important;">Plan Name : [planame]</h3>
                                                      <!-- <p style="margin-top: 0px;margin-bottom: 0px;">Event Planning Website Relaunch</p> --> 
                                                   </div>
                                                </div>
                                                <!--[if mso]>
                                             </td>
                                             <td width="200" align="right" valign="top" style="padding: 0px 8px;">
                                                <![endif]--> 
                                                <div class="o_col o_col-2 o_col-full" style="display: inline-block;vertical-align: top;width: 100%;max-width: 200px;">
                                                   <div style="font-size: 24px; line-height: 24px; height: 24px;">&nbsp; </div>
                                                   <div class="o_px-xs o_sans o_text o_text-white o_right o_xs-center" style="font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 16px;line-height: 24px;color: #ffffff;text-align: right;padding-left: 8px;padding-right: 8px;">
                                                      <h3 class="o_heading o_mb-xxs" style="font-family: Helvetica, Arial, sans-serif;font-weight: bold;margin-top: 0px;margin-bottom: 4px;font-size: 20px;line-height: 31px;font-weight: unset !important;">[planprice]</h3>
                                                      <p style="margin-top: 0px;margin-bottom: 0px;">Total Price</p>
                                                   </div>
                                                </div>
                                                <!--[if mso]>
                                             </td>
                                          </tr>
                                    </table>
                                    <![endif]--> 
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <!--[if mso]>
                     </td>
                  </tr>
            </table>
            <![endif]--> 
         </td>
      </tr>
   </tbody>
</table>
<!-- customer-details-plain --> 
<table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
   <tbody>
      <tr>
         <td class="o_bg-light o_px-xs" align="center" style="background-color: #dbe5ea;padding-left: 8px;padding-right: 8px;">
            <!--[if mso]>
            <table width="632" cellspacing="0" cellpadding="0" border="0" role="presentation">
               <tbody>
                  <tr>
                     <td>
                        <![endif]--> 
                        <table class="o_block" width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="max-width: 632px;margin: 0 auto;">
                           <tbody>
                              <tr>
                                 <td class="o_re o_bg-white o_px o_pb-md" align="center" style="font-size: 0;vertical-align: top;background-color: #000;padding-left: 16px;padding-right: 16px;padding-bottom: 24px;">
                                    <!--[if mso]>
                                    <table cellspacing="0" cellpadding="0" border="0" role="presentation">
                                       <tbody>
                                          <tr>
                                             <td width="300" align="center" valign="top" style="padding: 0px 8px;">
                                                <![endif]--> 
                                                <div class="o_col o_col-3 o_col-full" style="display: inline-block;vertical-align: top;width: 100%;max-width: 300px; float: left;">
                                                   <div style="font-size: 24px; line-height: 24px; height: 24px;">&nbsp; </div>
                                                   <div class="o_px-xs o_sans o_text-xs o_text-secondary o_left o_xs-center" style="font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 14px;line-height: 21px;color: #fff;text-align: left;padding-left: 8px;padding-right: 8px;">
                                                      <p class="o_mb-xs" style="margin-top: 0px;margin-bottom: 8px;"><strong>Billing Information</strong></p>
                                                      <p style="margin-top: 0px;margin-bottom: 0px;">[address]<br> [city]<br> [state]<br> [country]<br> [zipcode]<br> </p>
                                                   </div>
                                                </div>
                                                <div class="o_col o_col-3 o_col-full" style="display: inline-block;vertical-align: top;width: 100%;max-width: 300px; float: left;">
                                                   <div style="font-size: 24px; line-height: 24px; height: 24px;">&nbsp; </div>
                                                   <div class="o_px-xs o_sans o_text-xs o_text-secondary o_left o_xs-center" style="font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 14px;line-height: 21px;color: #fff;text-align: right;padding-left: 8px;padding-right: 8px;">
                                                      <p class="o_mb-xs" style="margin-top: 0px;margin-bottom: 8px;"><strong>GLOBAL NFT GROUP (GNG)</strong></p>
                                                      <p style="margin-top: 0px;margin-bottom: 0px;">Chuchubiweg 17<br> Solideo Building<br> Willemstad<br> Curacao<br></p>
                                                   </div>
                                                </div>
                                                <!--[if mso]>
                                             </td>
                                             <td width="300" align="left" valign="top" style="padding: 0px 8px;">
                                                <![endif]--> <!-- <div class="o_col o_col-3 o_col-full" style="display: inline-block;vertical-align: top;width: 100%;max-width: 300px;"> <div style="font-size: 24px; line-height: 24px; height: 24px;"> </div> <div class="o_px-xs o_sans o_text-xs o_text-secondary o_left o_xs-center" style="font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 14px;line-height: 21px;color: #424651;text-align: left;padding-left: 8px;padding-right: 8px;"> <p class="o_mb-xs" style="margin-top: 0px;margin-bottom: 8px;"><strong>Shipping Information</strong></p> <p style="margin-top: 0px;margin-bottom: 0px;">[address]<br> [city]<br> [state]<br> [country]<br> [zipcode]<br> </p> </div> </div> --> <!--[if mso]>
                                             </td>
                                          </tr>
                                    </table>
                                    <![endif]--> 
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <!--[if mso]>
                     </td>
                  </tr>
            </table>
            <![endif]--> 
         </td>
      </tr>
   </tbody>
</table>
<!-- spacer --> 
<table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
   <tbody>
      <tr>
         <td class="o_bg-light o_px-xs" align="center" style="background-color: #dbe5ea;padding-left: 8px;padding-right: 8px;">
            <!--[if mso]>
            <table width="632" cellspacing="0" cellpadding="0" border="0" role="presentation">
               <tbody>
                  <tr>
                     <td>
                        <![endif]--> 
                        <table class="o_block" width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="max-width: 632px;margin: 0 auto;">
                           <tbody>
                              <tr>
                                 <td class="o_bg-white" style="font-size: 24px;line-height: 24px;height: 24px;background-color: #000;">&nbsp; </td>
                              </tr>
                           </tbody>
                        </table>
                        <!--[if mso]>
                     </td>
                  </tr>
            </table>
            <![endif]--> 
         </td>
      </tr>
   </tbody>
</table>
<!-- invoice_header-xs --> 
<table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
   <tbody>
      <tr>
         <td class="o_bg-light o_px-xs" align="center" style="background-color: #dbe5ea;padding-left: 8px;padding-right: 8px;">
            <!--[if mso]>
            <table width="632" cellspacing="0" cellpadding="0" border="0" role="presentation">
               <tbody>
                  <tr>
                     <td>
                        <![endif]--> 
                        <table class="o_block" width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="max-width: 632px;margin: 0 auto;">
                           <tbody>
                              <tr>
                                 <td class="o_re o_bg-white o_px o_pt-xs o_hide-xs" align="center" style="font-size: 0;vertical-align: top;background-color: #000;padding-left: 16px;padding-right: 16px;padding-top: 8px;">
                                    <!--[if mso]>
                                    <table cellspacing="0" cellpadding="0" border="0" role="presentation">
                                       <tbody>
                                          <tr>
                                             <td width="500" align="left" valign="top" style="padding: 0px 8px;">
                                                <![endif]--> 
                                                <div class="o_col o_col-5" style="display: inline-block;vertical-align: top;width: 100%;max-width: 500px;">
                                                   <div class="o_px-xs o_sans o_text-xs o_left" style="font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 14px;line-height: 21px;text-align: left;padding-left: 8px;padding-right: 8px;">
                                                      <p class="o_text-light" style="color: #fff;margin-top: 0px;margin-bottom: 0px;">Item</p>
                                                   </div>
                                                </div>
                                                <!--[if mso]>
                                             </td>
                                             <td width="100" align="right" valign="top" style="padding: 0px 8px;">
                                                <![endif]--> 
                                                <div class="o_col o_col-1" style="display: inline-block;vertical-align: top;width: 100%;max-width: 100px;">
                                                   <div class="o_px-xs o_sans o_text-xs o_right" style="font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 14px;line-height: 21px;text-align: right;padding-left: 8px;padding-right: 8px;">
                                                      <p class="o_text-light" style="color: #fff;margin-top: 0px;margin-bottom: 0px;">Price</p>
                                                   </div>
                                                </div>
                                                <!--[if mso]>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td colspan="2" style="padding: 0px 8px;">
                                                <![endif]--> 
                                                <div class="o_px-xs" style="padding-left: 8px;padding-right: 8px;">
                                                   <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
                                                      <tbody>
                                                         <tr>
                                                            <td class="o_re o_bb-light" style="font-size: 9px;line-height: 9px;height: 9px;vertical-align: top;border-bottom: 1px solid #d3dce0;">&nbsp; </td>
                                                         </tr>
                                                      </tbody>
                                                   </table>
                                                </div>
                                                <!--[if mso]>
                                             </td>
                                          </tr>
                                    </table>
                                    <![endif]--> 
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <!--[if mso]>
                     </td>
                  </tr>
            </table>
            <![endif]--> 
         </td>
      </tr>
   </tbody>
</table>
<!-- invoice_row-xs --> 
<table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
   <tbody>
      <tr>
         <td class="o_bg-light o_px-xs" align="center" style="background-color: #dbe5ea;padding-left: 8px;padding-right: 8px;">
            <!--[if mso]>
            <table width="632" cellspacing="0" cellpadding="0" border="0" role="presentation">
               <tbody>
                  <tr>
                     <td>
                        <![endif]--> 
                        <table class="o_block" width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="max-width: 632px;margin: 0 auto;">
                           <tbody>
                              <tr>
                                 <td class="o_re o_bg-white o_px o_pt" align="center" style="font-size: 0;vertical-align: top;background-color: #000;padding-left: 16px;padding-right: 16px;padding-top: 16px;">
                                    <!--[if mso]>
                                    <table cellspacing="0" cellpadding="0" border="0" role="presentation">
                                       <tbody>
                                          <tr>
                                             <td width="500" align="left" valign="top" style="padding: 0px 8px;">
                                                <![endif]--> 
                                                <div class="o_col o_col-5 o_col-full" style="display: inline-block;vertical-align: top;width: 100%;max-width: 450px;">
                                                   <div class="o_px-xs o_sans o_text-xs o_left" style="font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 14px;line-height: 21px;text-align: left;padding-left: 8px;padding-right: 8px;">
                                                      <p class="o_text o_text-secondary" style="font-size: 16px;line-height: 24px;color: #fff;margin-top: 0px;margin-bottom: 0px;"><strong>[planame]</strong></p>
                                                      <p class="o_text-light" style="color: #fff;margin-top: 0px;margin-bottom: 0px;">[plandescription]</p>
                                                   </div>
                                                </div>
                                                <!--[if mso]>
                                             </td>
                                             <td width="100" align="right" valign="top" style="padding: 0px 8px;">
                                                <![endif]--> 
                                                <div class="o_col o_col-1 o_col-full" style="display: inline-block;vertical-align: top;width: 100%;max-width: 130px;">
                                                   <div class="o_px-xs o_sans o_text o_right o_xs-left" style="font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 16px;line-height: 24px;text-align: right;padding-left: 8px;padding-right: 8px;">
                                                      <p class="o_text-secondary" style="color: #fff ;margin-top: 0px;margin-bottom: 0px;"><span class="o_hide-lg" style="display: none;font-size: 0;max-height: 0;width: 0;line-height: 0;overflow: hidden;mso-hide: all;visibility: hidden;">Price:&nbsp; </span> [planprice]</p>
                                                   </div>
                                                </div>
                                                <!--[if mso]>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td colspan="2" style="padding: 0px 8px;">
                                                <![endif]--> 
                                                <div class="o_px-xs" style="padding-left: 8px;padding-right: 8px;">
                                                   <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
                                                      <tbody>
                                                         <tr>
                                                            <td class="o_re o_bb-light" style="font-size: 16px;line-height: 16px;height: 16px;vertical-align: top;border-bottom: 1px solid #d3dce0;">&nbsp; </td>
                                                         </tr>
                                                      </tbody>
                                                   </table>
                                                </div>
                                                <!--[if mso]>
                                             </td>
                                          </tr>
                                    </table>
                                    <![endif]--> 
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <!--[if mso]>
                     </td>
                  </tr>
            </table>
            <![endif]--> 
         </td>
      </tr>
   </tbody>
</table>
<!-- invoice_row-xs --> <!-- invoice_row-xs --> <!-- invoice_row-xs --> <!-- invoice-total-alt --> 
<table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
   <tbody>
      <tr>
         <td class="o_bg-light o_px-xs" align="center" style="background-color: #dbe5ea;padding-left: 8px;padding-right: 8px;">
            <!--[if mso]>
            <table width="632" cellspacing="0" cellpadding="0" border="0" role="presentation">
               <tbody>
                  <tr>
                     <td>
                        <![endif]--> 
                        <table class="o_block" width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="max-width: 632px;margin: 0 auto;">
                           <tbody>
                              <tr>
                                 <td class="o_re o_bg-white o_px-md o_py" align="right" style="font-size: 0;vertical-align: top;background-color: #000;padding-left: 24px;padding-right: 24px;padding-top: 16px;padding-bottom: 16px;">
                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                       <tbody>
                                          <tr>
                                             <td width="284" align="left">
                                                <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                                   <tbody>
                                                      <tr>
                                                         <td width="50%" class="o_pt-xs o_px" align="left" style="padding-left: 16px;padding-right: 16px;padding-top: 8px;">
                                                            <p class="o_sans o_text o_text-secondary" style="font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 16px;line-height: 24px;color: #fff;">Subtotal</p>
                                                         </td>
                                                         <td width="50%" class="o_pt-xs o_px" align="right" style="padding-left: 16px;padding-right: 16px;padding-top: 8px;">
                                                            <p class="o_sans o_text o_text-secondary" style="font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 16px;line-height: 24px;color: #fff;">[planprice]</p>
                                                         </td>
                                                      </tr>
                                                      <tr>
                                                         <td width="50%" class="o_pt-xs o_px" align="left" style="padding-left: 16px;padding-right: 16px;padding-top: 8px;">
                                                            <p class="o_sans o_text o_text-secondary" style="font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 16px;line-height: 24px;color: #fff;">Tax</p>
                                                         </td>
                                                         <td width="50%" class="o_pt-xs o_px" align="right" style="padding-left: 16px;padding-right: 16px;padding-top: 8px;">
                                                            <p class="o_sans o_text o_text-secondary" style="font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 16px;line-height: 24px;color: #fff;">[tax]</p>
                                                         </td>
                                                      </tr>
                                                      <tr>
                                                         <td width="50%" class="o_pt-xs o_px" align="left" style="padding-left: 16px;padding-right: 16px;padding-top: 8px;">
                                                            <p class="o_sans o_text o_text-secondary" style="font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 16px;line-height: 24px;color: #fff;">Coupon</p>
                                                         </td>
                                                         <td width="50%" class="o_pt-xs o_px" align="right" style="padding-left: 16px;padding-right: 16px;padding-top: 8px;">
                                                            <p class="o_sans o_text o_text-secondary" style="font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 16px;line-height: 24px;color: #fff;">[coupon]</p>
                                                         </td>
                                                      </tr>
                                                      <tr>
                                                         <td class="o_pt" style="padding-top: 16px;">&nbsp; </td>
                                                         <td class="o_pt" style="padding-top: 16px;">&nbsp; </td>
                                                      </tr>
                                                      <tr>
                                                         <td width="50%" class="o_py o_px o_bg-ultra_light o_br-l" align="left" style="background-color: #ebf5fa;border-radius: 4px 0px 0px 4px;padding-left: 16px;padding-right: 16px;padding-top: 16px;padding-bottom: 16px;">
                                                            <p class="o_sans o_text o_text-secondary" style="font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 16px;line-height: 24px;color: #424651;"><strong>Total Price</strong></p>
                                                         </td>
                                                         <td width="50%" class="o_py o_px o_bg-ultra_light o_br-r" align="right" style="background-color: #ebf5fa;border-radius: 0px 4px 4px 0px;padding-left: 16px;padding-right: 16px;padding-top: 16px;padding-bottom: 16px;">
                                                            <p class="o_sans o_text o_text-primary" style="font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 16px;line-height: 24px;color: #000;"><strong>[totalprice]</strong></p>
                                                         </td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <!--[if mso]>
                     </td>
                  </tr>
            </table>
            <![endif]--> 
         </td>
      </tr>
   </tbody>
</table>
<!-- spacer --> 
<table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
   <tbody>
      <tr>
         <td class="o_bg-light o_px-xs" align="center" style="background-color: #dbe5ea;padding-left: 8px;padding-right: 8px;">
            <!--[if mso]>
            <table width="632" cellspacing="0" cellpadding="0" border="0" role="presentation">
               <tbody>
                  <tr>
                     <td>
                        <![endif]--> 
                        <table class="o_block" width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="max-width: 632px;margin: 0 auto;">
                           <tbody>
                              <tr>
                                 <td class="o_bg-white" style="font-size: 24px;line-height: 24px;height: 24px;background-color: #000;">&nbsp; </td>
                              </tr>
                           </tbody>
                        </table>
                        <!--[if mso]>
                     </td>
                  </tr>
            </table>
            <![endif]--> 
         </td>
      </tr>
   </tbody>
</table>
<!-- content --> <!-- button-dark --> 
<table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
   <tbody>
      <tr>
         <td class="o_bg-light o_px-xs" align="center" style="background-color: #dbe5ea;padding-left: 8px;padding-right: 8px;padding-bottom: 20px;">
            <!--[if mso]>
            <table width="632" cellspacing="0" cellpadding="0" border="0" role="presentation">
               <tbody>
                  <tr>
                     <td>
                        <![endif]--> 
                        <table class="o_block" width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="max-width: 632px;margin: 0 auto;">
                           <tbody>
                              <tr>
                                 <td class="o_re o_bg-white o_px o_pb-lg o_bt-light o_br-b" style="font-size: 0;vertical-align: top;background-color: #000;border-top: 1px solid #d3dce0;border-radius: 0px 0px 4px 4px;padding-left: 16px;padding-right: 16px;padding-bottom: 32px;" align="center">
                                    <!--[if mso]>
                                    <table cellspacing="0" cellpadding="0" border="0" role="presentation">
                                       <tbody>
                                          <tr>
                                             <td width="200" align="left" valign="top" style="padding:0px 8px;">
                                                <![endif]--> 
                                                <div class="o_col o_col-4" style="display: inline-block;vertical-align: top;width: 100%;max-width: 300px;">
                                                   <div style="font-size: 32px; line-height: 32px; height: 32px;">&nbsp; </div>
                                                   <div class="o_px-xs o_sans o_text-xs o_text-light o_left o_xs-center" style="font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 14px;line-height: 21px;color: #fff;text-align: left;padding-left: 8px;padding-right: 8px;">
                                                      <p class="o_mb-xs" style="margin-top: 0px;margin-bottom: 8px;"> [site_name] </p>
                                                      <p class="o_mb-xs" style="margin-top: 0px;margin-bottom: 8px;"> [copyrigh] </p>
                                                      <p style="margin-top: 0px;margin-bottom: 0px;">
                                                         <!-- <a class="o_text-light o_underline" style="text-decoration: underline;outline: none;color: #82899a;">Help Center</a> <span class="o_hide-xs"> • </span><br class="o_hide-lg" style="display: none;font-size: 0;max-height: 0;width: 0;line-height: 0;overflow: hidden;mso-hide: all;visibility: hidden;"> <a class="o_text-light o_underline" style="text-decoration: underline;outline: none;color: #82899a;">Preferences</a> <span class="o_hide-xs"> • </span><br class="o_hide-lg" style="display: none;font-size: 0;max-height: 0;width: 0;line-height: 0;overflow: hidden;mso-hide: all;visibility: hidden;"> --> 
                                                      </p>
                                                   </div>
                                                </div>
                                                <!--[if mso]>
                                             </td>
                                             <td width="400" align="right" valign="top" style="padding:0px 8px;">
                                                <![endif]--> 
                                                <div class="o_col o_col-2" style="display: inline-block;vertical-align: top;width: 100%;max-width: 300px;">
                                                   <div style="font-size: 32px; line-height: 32px; height: 32px;">&nbsp; </div>
                                                   <div class="o_px-xs o_sans o_text-xs o_text-light o_right o_xs-center" style="font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 14px;line-height: 21px;color: #82899a;text-align: right;padding-left: 8px;padding-right: 8px;">
                                                      <p style="margin-top: 0px;margin-bottom: 0px;"> <a class="o_text-light" href="[facebooklinkurl]" style="text-decoration: none;outline: none;color: #82899a;"><img src="https://1375256716.rsc.cdn77.org/assets/img/emailicon/facebook.png" alt="fb" style="max-width: 36px;-ms-interpolation-mode: bicubic;vertical-align: middle;border: 0;line-height: 100%;height: auto;outline: none;text-decoration: none;" width="36" height="36"></a> <a class="o_text-light" href="[twitterlinkurl]" style="text-decoration: none;outline: none;color: #82899a;"><img src="https://1375256716.rsc.cdn77.org/assets/img/emailicon/twitter.png" alt="tw" style="max-width: 36px;-ms-interpolation-mode: bicubic;vertical-align: middle;border: 0;line-height: 100%;height: auto;outline: none;text-decoration: none;" width="36" height="36"></a> <a class="o_text-light" href="[instagramlinkurl]" style="text-decoration: none;outline: none;color: #82899a;"><img src="https://1375256716.rsc.cdn77.org/assets/img/emailicon/instagram.png" alt="ig" style="max-width: 36px;-ms-interpolation-mode: bicubic;vertical-align: middle;border: 0;line-height: 100%;height: auto;outline: none;text-decoration: none;" width="36" height="36"></a> <a class="o_text-light" href="[googlelinkurl]" style="text-decoration: none;outline: none;color: #82899a;"><img src="https://d1i31jgmhbsknz.cloudfront.net/uploads/dashboard/telegramgray.png" alt="sc" style="max-width: 36px;-ms-interpolation-mode: bicubic;vertical-align: middle;border: 0;line-height: 100%;height: auto;outline: none;text-decoration: none;width: 30px;" width="36" height="36"></a> <a class="o_text-light" href="[linkedinlinkurl]" style="text-decoration: none;outline: none;color: #82899a;"><img src="https://1375256716.rsc.cdn77.org/assets/img/emailicon/linkedin.png" alt="sc" style="max-width: 36px;-ms-interpolation-mode: bicubic;vertical-align: middle;border: 0;line-height: 100%;height: auto;outline: none;text-decoration: none;" width="36" height="36"></a> </p>
                                                   </div>
                                                </div>
                                                <!--[if mso]>
                                             </td>
                                          </tr>
                                    </table>
                                    <![endif]--> 
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <!--[if mso]>
                     </td>
                  </tr>
            </table>
            <![endif]--> 
         </td>
      </tr>
   </tbody>
</table>
<!-- spacer-lg -->
  </div>
`;


console.log(editor);

// Load the template into the editor
editor.setComponents(templateContent);  

  // Save the editor instance to the ref
  editorRef.current = editor;

  
    // Cleanup on component unmount
    return () => {
      editor.destroy();
    };
  }, []); // Empty dependency array ensures useEffect runs only once after initial render


  
  const getHtmlContent = () => {
   const editor = editorRef.current;

   if (editor) {
     // Get the HTML content
     const htmlContent = editor.getHtml();

     // Log or use the HTML content as needed
     console.log(htmlContent);
   }
 };

  return (<><div id="gjs" ></div> <button onClick={getHtmlContent}>Save HTML and CSS</button></>
  );
}
