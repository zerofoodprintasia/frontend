import Link from "next/link"
import { Layout } from "@components/Layout"
import { Hero } from "@components/Hero"

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />

        {/* why */}
        <section>
          <div className="relative py-8 bg-white overflow-hidden">
            <div className="relative px-4 sm:px-6 lg:px-8">
              <div className="max-w-prose mx-auto">
                <h2 className="text-lg">
                  <span className="block text-base text-center text-green font-semibold tracking-wide uppercase">
                    What is Zero Foodprint Asia (ZFPA)?
                  </span>
                </h2>
                <div>
                  <p className="mt-6 text-base text-justify text-gray-600 leading-8">
                    Zero Foodprint Asia, an extension of{" "}
                    <a href="https://www.zerofoodprint.org" target="_blank">
                      Zero Foodprint
                    </a>{" "}
                    in California, is a nonprofit organization mobilizing the
                    food world around agricultural climate solutions. ZFPA hosts
                    a crowdfunding program that gathers funds from member food
                    businesses such as restaurants, cafes, bars and food
                    retailers. Every member pledges 1% of their revenue to ZFPA
                    to fund regenerative farming practices that draw down carbon
                    from the atmosphere and help combat global warming; this is
                    the ZFP model.
                  </p>
                  <p className="mt-6 text-base text-justify text-gray-600 leading-8">
                    Our aim is to engage the hospitality sector in climate
                    solutions and create a culture where it is normal for food
                    businesses and customers to directly bring about
                    improvements in the food system. Food businesses participate
                    by becoming a ZFPA member and customers contribute by
                    spending at member food businesses. With just a few dollars
                    per customer, we help restore the climate one meal at a
                    time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
