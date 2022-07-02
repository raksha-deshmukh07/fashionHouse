//https://mdbootstrap.com/docs/b5/react/navigation/footer/#docsTabsOverview
import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import './footer.css'

export default function Footer() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon="facebook-f" />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </a>
        </section>

        <section className=''>
          <form action=''>
            <div className='row d-flex justify-content-center newsleter'>
              <div className='col-auto'>
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <MDBCol md='5' start='12'>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <div className='col-auto'>
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </div>
            </div>
          </form>
        </section>

        <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}
// import React from 'react';
// import {CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
// import { CDBFooter } from 'cdbreact';

// export const Footer = () => {
//   return (
//     <CDBFooter className="shadow">
//       <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
//         <CDBBox display="flex" justifyContent="between" className="flex-wrap">
//           <CDBBox>
//             <a href="/" className="d-flex align-items-center p-0 text-dark">
//               <img alt="logo" src="logo" width="30px" />
//               <span className="ml-3 h5 font-weight-bold">Devwares</span>
//             </a>
//             <p className="my-3" style={{ width: '250px' }}>
//               We are creating High Quality Resources and tools to Aid developers during the
//               developement of their projects
//             </p>
//             <CDBBox display="flex" className="mt-4">
//               <CDBBtn flat color="dark">
//                 <CDBIcon fab icon="facebook-f" />
//               </CDBBtn>
//               <CDBBtn flat color="dark" className="mx-3">
//                 <CDBIcon fab icon="twitter" />
//               </CDBBtn>
//               <CDBBtn flat color="dark" className="p-2">
//                 <CDBIcon fab icon="instagram" />
//               </CDBBtn>
//             </CDBBox>
//           </CDBBox>
//           <CDBBox>
//             <p className="h5 mb-4" style={{ fontWeight: '600' }}>
//               Devwares
//             </p>
//             <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
//               <CDBFooterLink href="/">Resources</CDBFooterLink>
//               <CDBFooterLink href="/">About Us</CDBFooterLink>
//               <CDBFooterLink href="/">Contact</CDBFooterLink>
//               <CDBFooterLink href="/">Blog</CDBFooterLink>
//             </CDBBox>
//           </CDBBox>
//           <CDBBox>
//             <p className="h5 mb-4" style={{ fontWeight: '600' }}>
//               Help
//             </p>
//             <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
//               <CDBFooterLink href="/">Support</CDBFooterLink>
//               <CDBFooterLink href="/">Sign Up</CDBFooterLink>
//               <CDBFooterLink href="/">Sign In</CDBFooterLink>
//             </CDBBox>
//           </CDBBox>
//           <CDBBox>
//             <p className="h5 mb-4" style={{ fontWeight: '600' }}>
//               Products
//             </p>
//             <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
//               <CDBFooterLink href="/">Windframe</CDBFooterLink>
//               <CDBFooterLink href="/">Loop</CDBFooterLink>
//               <CDBFooterLink href="/">Contrast</CDBFooterLink>
//             </CDBBox>
//           </CDBBox>
//         </CDBBox>
//         <small className="text-center mt-5">&copy; Devwares, 2020. All rights reserved.</small>
//       </CDBBox>
//     </CDBFooter>
//   );
// };