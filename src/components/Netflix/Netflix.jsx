import "./netflix.css";
const Netflix = () => {
  return (
    <div>
      <div className="main-container">
        <div className="blare-area">
          {/* header start here  */}
          <div className="header">
            <div className="container">
              <div className="col-md-6">
                <div className="logo-dev">
                  <div className="logo">
                    <svg
                      viewBox="0 0 111 30"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      class="default-ltr-cache-1d568uk ev1dnif2"
                    >
                      <g>
                        <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
          {/* header end here  */}

          {/* form start here  */}
          <div className="container">
            <div className="singin-form d-flex flex-wrap">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <div className="form-dev d-flex justify-content-center">
                  <div className="card">
                    <header className="login-form-header justify-content-center">
                      <div className="main-form">
                        <h1 className="login-page-title">Sign In</h1>
                      </div>
                    </header>

                    <div className="d-flex justify-content-center">
                      <form
                        className="main-form  "
                        aria-label="Sign In"
                        method="post"
                      >
                        <div>
                          <div className="form-label-text">
                            <label className="label-text-1">
                              Email or mobile number
                            </label>
                            <div>
                              <input
                                type="text"
                                autoComplete="email"
                                id=":r0:"
                                name="userLoginId"
                                data-uia="login-field"
                                defaultValue=""
                                aria-describedby=":r1:"
                                aria-invalid="true"
                              />
                              <div />
                            </div>
                            <div className="svg-text-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                role="img"
                                data-icon="CircleXSmall"
                                aria-hidden="true"
                                className="default-ltr-cache-0 e1vkmu651"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z"
                                  fill="currentColor"
                                />
                              </svg>
                              Please enter a valid email or phone number.
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            data-uia="password-field+container"
                            className=" e2so2tu1 default-ltr-cache-4o4q5b ea3diy35"
                          >
                            <label className="label-text-2">Password</label>
                            <div className="default-ltr-cache-fmygl2 ea3diy34">
                              <input
                                type="password"
                                autoComplete="password"
                                id=":r3:"
                                name="password"
                                data-uia="password-field"
                              />
                              <div
                                aria-hidden="true"
                                className="default-ltr-cache-emv211 ea3diy33"
                              />
                            </div>
                          </div>
                        </div>

                        <button className="btn btn-primary">Sign In</button>
                        <p className="text-center pt-2 ">OR</p>
                        <button type="button" className="btn-2">
                          Use a Sign-In Code
                        </button>
                        <div className="forgot text-center py-2">
                          <a>Forgot password?</a>
                        </div>
                      </form>
                    </div>

                    {/* footer section start  */}
                    <div className="footer">
                      <div className=" d-flex  footer-content">
                        <div className=" d-flex gap-2">
                          <div className="check-box d-flex">
                            <input
                              type="checkbox"
                              name="rememberMe"
                              data-uia="remember-me-field"
                              defaultChecked=""
                            />
                            <div className="svg-check" aria-hidden="true">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                role="img"
                                data-icon="CheckmarkSmall"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M13.4696 3.46973L14.5303 4.53039L6.53026 12.5304C6.23737 12.8233 5.7625 12.8233 5.4696 12.5304L1.4696 8.53039L2.53026 7.46973L5.99993 10.9394L13.4696 3.46973Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="remine-text">
                            <span>Remember me</span>
                          </div>
                        </div>
                      </div>

                      <div className="buttom-section d-flex justify-content-center">
                        <div className="main-section">
                        <p>
                          New to Netflix?
                          <a class="" target="_self" href="#">
                            Sign up now
                          </a>
                          .
                        </p>
                        <div  className="discription-text">
                          <p>
                            <span>
                              This page is protected by Google reCAPTCHA to
                              ensure you're not a bot.
                            </span>
                            &nbsp;
                            <button
                              class="recaptcha-terms-of-use--link-button"
                              data-uia="recaptcha-learn-more-button"
                            >
                              Learn more.
                            </button>
                          </p>
                          {/* <div>
                            <span id="" data-uia="recaptcha-disclosure-text">
                              The information collected by Google reCAPTCHA is
                              subject to the Google{" "}
                              <a
                                href="https://policies.google.com/privacy"
                                id="recaptcha-privacy-link"
                                data-uia="recaptcha-privacy-link"
                                target="_blank"
                              >
                                Privacy Policy
                              </a>{" "}
                              and{" "}
                              <a
                                href="https://policies.google.com/terms"
                                id="recaptcha-tos-link"
                                data-uia="recaptcha-tos-link"
                                target="_blank"
                              >
                                Terms of Service
                              </a>
                              , and is used for providing, maintaining, and
                              improving the reCAPTCHA service and for general
                              security purposes (it is not used for personalized
                              advertising by Google).
                            </span>
                          </div> */}
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
          {/* form end here  */}
        </div>
      </div>

      <div className="button-section">
        
      </div>
    </div>
  );
};

export default Netflix;
