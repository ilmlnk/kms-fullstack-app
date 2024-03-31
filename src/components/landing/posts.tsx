export const PostsBlock = () => {
    return (
        <div className="px-5 sm:px-10 md:px-20 lg:px-10 xl:px-20 py-[7rem] bg-indigo-100" id="blog-posts">
          <div className="max-w-screen-xl mx-auto">
            <div className="xl:flex">
              <div>
                <h3 className="leading-none font-black text-3xl dark:text-black">Popular Posts</h3>
                <div className="flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-around">
                  <a href="https://owaiskhan.me" className="flex w-full max-w-sm mt-6 lg:mt-8 xl:mr-8">
                    <div className="transition-all duration-300 cursor-pointer w-full shadow-lg hover:shadow-xl rounded-lg bg-white dark:bg-background/75 relative">
                      <div className="w-full h-48 bg-cover rounded-t-lg"></div>
                      <div className="p-6">
                        <div className="text-lg font-bold">Tips for creating an amazing design system</div>
                        <div className="mt-2 text-gray-900 dark:text-slate-300 text-sm">
                          Learn how to create a new design system that is beautiful and efficient for creating your UI
                          components.
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="https://timerse.com" className="flex w-full max-w-sm mt-6 lg:mt-8 xl:mr-8">
                    <div className="transition-all duration-300 cursor-pointer w-full shadow-lg hover:shadow-xl rounded-lg bg-white dark:bg-background/75 relative">
                      <div className="w-full h-48 bg-cover rounded-t-lg"></div>
                      <div className="p-6">
                        <div className="text-lg font-bold">Using a drawing tablet to create beautiful icons</div>
                        <div className="mt-2 text-gray-900 dark:text-slate-300 text-sm">
                          Good Icons are hard to come by. This article guides you on how to create beautiful sketched
                          icons using a drawing pad.
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-12 xl:mt-0 xl:ml-8">
                <h3 className="leading-none font-black text-3xl dark:text-black">Recent Posts</h3>
                <div className="flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-around xl:flex-col">
                  <a href="https://owaiskhan.me" className="flex w-full max-w-sm mt-6 lg:mt-8">
                    <div className="transition-all duration-300 cursor-pointer w-full shadow-lg hover:shadow-xl rounded-lg
                    bg-white dark:bg-background/75 relative xl:flex xl:flex-row-reverse xl:items-center xl:px-6 xl:py-8">
                      <div className="w-full h-48 bg-cover rounded-t-lg xl:w-32 xl:h-20 xl:rounded-lg xl:ml-2"></div>
                      <div className="p-6 xl:p-0">
                        <div className="text-lg font-bold">How to work effectively with freelancers</div>
                        <div className="mt-2 text-gray-900 text-sm xl:hidden">
                          Hiring a freelancer for your new project can be challenging if you&apos;ve never done before. Learn
                          some tips that will allow you to have a better experience working with freelancers
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="https://owaiskhan.me" className="flex w-full max-w-sm mt-6 lg:mt-8">
                    <div className="transition-all duration-300 cursor-pointer w-full shadow-lg hover:shadow-xl rounded-lg
                    bg-white dark:bg-background/75 relative xl:flex xl:flex-row-reverse xl:items-center xl:px-6 xl:py-8">
                      <div className="w-full h-48 bg-cover rounded-t-lg xl:w-32 xl:h-20 xl:rounded-lg xl:ml-2" ></div>
                      <div className="p-6 xl:p-0">
                        <div className="text-lg font-bold">How to create smooth React Native animations</div>
                        <div className="mt-2 text-gray-900 text-sm xl:hidden">
                          Animations play a vital role in user experience. This article describes how you can create
                          butter smooth 60 FPS animations easily.
                        </div>
                      </div>
                    </div>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
    );
}