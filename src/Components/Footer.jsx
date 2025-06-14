import { resourcesLinks, platformLinks, communityLinks } from "../assets/constants"

const Footer = () => {
  return (
    <div className="mt-20 border-t py-10 border-neutral-700">
        <div className="pl-10 grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
                <h3 className="mb-2 mt-3 font-semibold ">Resources</h3>
                <ul>
                {resourcesLinks.map((link, index) => (
                  <li key={index}>
                    <a className="text-xs text-neutral-400 hover:text-white" href="#">{link.text}</a>
                  </li>
                ))}
                </ul>
            </div>

             <div>
                <h3 className="mb-2 mt-3 font-semibold">Platform</h3>
                <ul>
                {platformLinks.map((link, index) => (
                  <li key={index}>
                    <a className="text-xs text-neutral-400 hover:text-white" href="#">{link.text}</a>
                  </li>
                ))}
                </ul>
            </div>

             <div>
                <h3 className="mb-2 mt-3 font-semibold">Community</h3>
                <ul>
                {communityLinks.map((link, index) => (
                  <li key={index}>
                    <a className="text-xs text-neutral-400 hover:text-white" href="#">{link.text}</a>
                  </li>
                ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer