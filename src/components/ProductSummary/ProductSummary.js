import { PaperClipIcon } from "@heroicons/react/20/solid";
import FormSection2 from "../FormSection2/FormSection2";
import { useState,useCallback } from "react";
import ImageViewer from 'react-simple-image-viewer';

export default function ProductSummary(props) {
  const htmlString = props.summary["product_description"];
  const htmlOBJ = { __html: htmlString };

  let imgObject = [];
  let imageLinks = []

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);


  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  for (const [key, value] of Object.entries(props.file)) {
    imgObject = [value[0], ...imgObject];
    imageLinks = [value[1], ...imageLinks];
  }

  return (
    <div
      className={`${props.visibility ? "bg-white p-10 rounded-sm" : "hidden"}`}
    >
      {isViewerOpen && (
        <ImageViewer
          src={imageLinks}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Product Summary
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Please review the details of the product.
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Title
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {props.summary["product_title"]}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Description
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0" dangerouslySetInnerHTML={htmlOBJ} >
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Quantity
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {props.summary["product_quantity"]}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Price
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {props.summary["product_price"]}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Dimensions
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Large 34
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Module
            </dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                {imgObject.map((ele, index) => {
                  return (
                    ele ? 
                    (<li key={index} className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium">{ele ? ele.name : ""}</span>
                          <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => openImageViewer(index)}>
                          Open
                        </a>
                      </div>
                    </li>) : (<></>)
                  )
                })}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
