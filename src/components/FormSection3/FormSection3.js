import React from "react";

const FormSection3 = (props) => {
  return (
    <div className={ `${props.visibility ? 'block' : 'hidden'}`}>
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-6">
        {/* The Product title */}
        <div className="sm:col-span-4">
          <label
            htmlFor="username"
            className="mt-6 text-lg leading-8 text-gray-300"
          >
            Product Quantity
          </label>
          <div className="mt-2 flex justify-center lg:justify-start">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 lg:max-w-md">
              <input
                type="number"
                name="product_quantity"
                id="product-quantity"
                placeholder="Quantity"
                value={props.FieldValues.product_quantity}
                onChange={props.TextChangeHandler}
                autoComplete="given-name"
                className="block mdsm:max-w-xs rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        {/* The Product Description */}
        <div className="sm:col-span-3">
        <label
            htmlFor="username"
            className="mt-6 text-lg leading-8 text-gray-300"
          >
            Price
          </label>
          <div className="mt-2 flex lg:justify-start justify-center">
            <select
              id="product_currency"
              name="product_currency"
              autoComplete="country-name"
              defaultValue={props.FieldValues.product_currency}
              onChange={props.TextChangeHandler}
              className="block rounded-md mr-5 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>--</option>
              <option value="AFN" label="AFN">
                Afghan Afghani
              </option>
              <option value="ALL" label="ALL">
                Albanian Lek
              </option>
              <option value="DZD" label="DZD">
                Algerian Dinar
              </option>
              <option value="AOA" label="AOA">
                Angolan Kwanza
              </option>
              <option value="ARS" label="ARS">
                Argentine Peso
              </option>
              <option value="AMD" label="AMD">
                Armenian Dram
              </option>
              <option value="AWG" label="AWG">
                Aruban Florin
              </option>
              <option value="AUD" label="AUD">
                Australian Dollar
              </option>
              <option value="AZN" label="AZN">
                Azerbaijani Manat
              </option>
              <option value="BSD" label="BSD">
                Bahamian Dollar
              </option>
              <option value="BHD" label="BHD">
                Bahraini Dinar
              </option>
              <option value="BDT" label="BDT">
                Bangladeshi Taka
              </option>
              <option value="BBD" label="BBD">
                Barbadian Dollar
              </option>
              <option value="BYR" label="BYR">
                Belarusian Ruble
              </option>
              <option value="BEF" label="BEF">
                Belgian Franc
              </option>
              <option value="BZD" label="BZD">
                Belize Dollar
              </option>
              <option value="BMD" label="BMD">
                Bermudan Dollar
              </option>
              <option value="BTN" label="BTN">
                Bhutanese Ngultrum
              </option>
              <option value="BTC" label="BTC">
                Bitcoin
              </option>
              <option value="BOB" label="BOB">
                Bolivian Boliviano
              </option>
              <option value="BAM" label="BAM">
                Bosnia-Herzegovina Convertible Mark
              </option>
              <option value="BWP" label="BWP">
                Botswanan Pula
              </option>
              <option value="BRL" label="BRL">
                Brazilian Real
              </option>
              <option value="GBP" label="GBP">
                British Pound Sterling
              </option>
              <option value="BND" label="BND">
                Brunei Dollar
              </option>
              <option value="BGN" label="BGN">
                Bulgarian Lev
              </option>
              <option value="BIF" label="BIF">
                Burundian Franc
              </option>
              <option value="KHR" label="KHR">
                Cambodian Riel
              </option>
              <option value="CAD" label="CAD">
                Canadian Dollar
              </option>
              <option value="CVE" label="CVE">
                Cape Verdean Escudo
              </option>
              <option value="KYD" label="KYD">
                Cayman Islands Dollar
              </option>
              <option value="XOF" label="XOF">
                CFA Franc BCEAO
              </option>
              <option value="XAF" label="XAF">
                CFA Franc BEAC
              </option>
              <option value="XPF" label="XPF">
                CFP Franc
              </option>
              <option value="CLP" label="CLP">
                Chilean Peso
              </option>
              <option value="CNY" label="CNY">
                Chinese Yuan
              </option>
              <option value="COP" label="COP">
                Colombian Peso
              </option>
              <option value="KMF" label="KMF">
                Comorian Franc
              </option>
              <option value="CDF" label="CDF">
                Congolese Franc
              </option>
              <option value="CRC" label="CRC">
                Costa Rican ColÃ³n
              </option>
              <option value="HRK" label="HRK">
                Croatian Kuna
              </option>
              <option value="CUC" label="CUC">
                Cuban Convertible Peso
              </option>
              <option value="CZK" label="CZK">
                Czech Republic Koruna
              </option>
              <option value="DKK" label="DKK">
                Danish Krone
              </option>
              <option value="DJF" label="DJF">
                Djiboutian Franc
              </option>
              <option value="DOP" label="DOP">
                Dominican Peso
              </option>
              <option value="XCD" label="XCD">
                East Caribbean Dollar
              </option>
              <option value="EGP" label="EGP">
                Egyptian Pound
              </option>
              <option value="ERN" label="ERN">
                Eritrean Nakfa
              </option>
              <option value="EEK" label="EEK">
                Estonian Kroon
              </option>
              <option value="ETB" label="ETB">
                Ethiopian Birr
              </option>
              <option value="EUR" label="EUR">
                Euro
              </option>
              <option value="FKP" label="FKP">
                Falkland Islands Pound
              </option>
              <option value="FJD" label="FJD">
                Fijian Dollar
              </option>
              <option value="GMD" label="GMD">
                Gambian Dalasi
              </option>
              <option value="GEL" label="GEL">
                Georgian Lari
              </option>
              <option value="DEM" label="DEM">
                German Mark
              </option>
              <option value="GHS" label="GHS">
                Ghanaian Cedi
              </option>
              <option value="GIP" label="GIP">
                Gibraltar Pound
              </option>
              <option value="GRD" label="GRD">
                Greek Drachma
              </option>
              <option value="GTQ" label="GTQ">
                Guatemalan Quetzal
              </option>
              <option value="GNF" label="GNF">
                Guinean Franc
              </option>
              <option value="GYD" label="GYD">
                Guyanaese Dollar
              </option>
              <option value="HTG" label="HTG">
                Haitian Gourde
              </option>
              <option value="HNL" label="HNL">
                Honduran Lempira
              </option>
              <option value="HKD" label="HKD">
                Hong Kong Dollar
              </option>
              <option value="HUF" label="HUF">
                Hungarian Forint
              </option>
              <option value="ISK" label="ISK">
                Icelandic KrÃ³na
              </option>
              <option value="INR" label="INR">
                Indian Rupee
              </option>
              <option value="IDR" label="IDR">
                Indonesian Rupiah
              </option>
              <option value="IRR" label="IRR">
                Iranian Rial
              </option>
              <option value="IQD" label="IQD">
                Iraqi Dinar
              </option>
              <option value="ILS" label="ILS">
                Israeli New Sheqel
              </option>
              <option value="ITL" label="ITL">
                Italian Lira
              </option>
              <option value="JMD" label="JMD">
                Jamaican Dollar
              </option>
              <option value="JPY" label="JPY">
                Japanese Yen
              </option>
              <option value="JOD" label="JOD">
                Jordanian Dinar
              </option>
              <option value="KZT" label="KZT">
                Kazakhstani Tenge
              </option>
              <option value="KES" label="KES">
                Kenyan Shilling
              </option>
              <option value="KWD" label="KWD">
                Kuwaiti Dinar
              </option>
              <option value="KGS" label="KGS">
                Kyrgystani Som
              </option>
              <option value="LAK" label="LAK">
                Laotian Kip
              </option>
              <option value="LVL" label="LVL">
                Latvian Lats
              </option>
              <option value="LBP" label="LBP">
                Lebanese Pound
              </option>
              <option value="LSL" label="LSL">
                Lesotho Loti
              </option>
              <option value="LRD" label="LRD">
                Liberian Dollar
              </option>
              <option value="LYD" label="LYD">
                Libyan Dinar
              </option>
              <option value="LTL" label="LTL">
                Lithuanian Litas
              </option>
              <option value="MOP" label="MOP">
                Macanese Pataca
              </option>
              <option value="MKD" label="MKD">
                Macedonian Denar
              </option>
              <option value="MGA" label="MGA">
                Malagasy Ariary
              </option>
              <option value="MWK" label="MWK">
                Malawian Kwacha
              </option>
              <option value="MYR" label="MYR">
                Malaysian Ringgit
              </option>
              <option value="MVR" label="MVR">
                Maldivian Rufiyaa
              </option>
              <option value="MRO" label="MRO">
                Mauritanian Ouguiya
              </option>
              <option value="MUR" label="MUR">
                Mauritian Rupee
              </option>
              <option value="MXN" label="MXN">
                Mexican Peso
              </option>
              <option value="MDL" label="MDL">
                Moldovan Leu
              </option>
              <option value="MNT" label="MNT">
                Mongolian Tugrik
              </option>
              <option value="MAD" label="MAD">
                Moroccan Dirham
              </option>
              <option value="MZM" label="MZM">
                Mozambican Metical
              </option>
              <option value="MMK" label="MMK">
                Myanmar Kyat
              </option>
              <option value="NAD" label="NAD">
                Namibian Dollar
              </option>
              <option value="NPR" label="NPR">
                Nepalese Rupee
              </option>
              <option value="ANG" label="ANG">
                Netherlands Antillean Guilder
              </option>
              <option value="TWD" label="TWD">
                New Taiwan Dollar
              </option>
              <option value="NZD" label="NZD">
                New Zealand Dollar
              </option>
              <option value="NIO" label="NIO">
                Nicaraguan CÃ³rdoba
              </option>
              <option value="NGN" label="NGN">
                Nigerian Naira
              </option>
              <option value="KPW" label="KPW">
                North Korean Won
              </option>
              <option value="NOK" label="NOK">
                Norwegian Krone
              </option>
              <option value="OMR" label="OMR">
                Omani Rial
              </option>
              <option value="PKR" label="PKR">
                Pakistani Rupee
              </option>
              <option value="PAB" label="PAB">
                Panamanian Balboa
              </option>
              <option value="PGK" label="PGK">
                Papua New Guinean Kina
              </option>
              <option value="PYG" label="PYG">
                Paraguayan Guarani
              </option>
              <option value="PEN" label="PEN">
                Peruvian Nuevo Sol
              </option>
              <option value="PHP" label="PHP">
                Philippine Peso
              </option>
              <option value="PLN" label="PLN">
                Polish Zloty
              </option>
              <option value="QAR" label="QAR">
                Qatari Rial
              </option>
              <option value="RON" label="RON">
                Romanian Leu
              </option>
              <option value="RUB" label="RUB">
                Russian Ruble
              </option>
              <option value="RWF" label="RWF">
                Rwandan Franc
              </option>
              <option value="SVC" label="SVC">
                Salvadoran ColÃ³n
              </option>
              <option value="WST" label="WST">
                Samoan Tala
              </option>
              <option value="SAR" label="SAR">
                Saudi Riyal
              </option>
              <option value="RSD" label="RSD">
                Serbian Dinar
              </option>
              <option value="SCR" label="SCR">
                Seychellois Rupee
              </option>
              <option value="SLL" label="SLL">
                Sierra Leonean Leone
              </option>
              <option value="SGD" label="SGD">
                Singapore Dollar
              </option>
              <option value="SKK" label="SKK">
                Slovak Koruna
              </option>
              <option value="SBD" label="SBD">
                Solomon Islands Dollar
              </option>
              <option value="SOS" label="SOS">
                Somali Shilling
              </option>
              <option value="ZAR" label="ZAR">
                South African Rand
              </option>
              <option value="KRW" label="KRW">
                South Korean Won
              </option>
              <option value="XDR" label="XDR">
                Special Drawing Rights
              </option>
              <option value="LKR" label="LKR">
                Sri Lankan Rupee
              </option>
              <option value="SHP" label="SHP">
                St. Helena Pound
              </option>
              <option value="SDG" label="SDG">
                Sudanese Pound
              </option>
              <option value="SRD" label="SRD">
                Surinamese Dollar
              </option>
              <option value="SZL" label="SZL">
                Swazi Lilangeni
              </option>
              <option value="SEK" label="SEK">
                Swedish Krona
              </option>
              <option value="CHF" label="CHF">
                Swiss Franc
              </option>
              <option value="SYP" label="SYP">
                Syrian Pound
              </option>
              <option value="STD" label="STD">
                São Tomé and Príncipe Dobra
              </option>
              <option value="TJS" label="TJS">
                Tajikistani Somoni
              </option>
              <option value="TZS" label="TZS">
                Tanzanian Shilling
              </option>
              <option value="THB" label="THB">
                Thai Baht
              </option>
              <option value="TOP" label="TOP">
                Tongan pa'anga
              </option>
              <option value="TTD" label="TTD">
                Trinidad & Tobago Dollar
              </option>
              <option value="TND" label="TND">
                Tunisian Dinar
              </option>
              <option value="TRY" label="TRY">
                Turkish Lira
              </option>
              <option value="TMT" label="TMT">
                Turkmenistani Manat
              </option>
              <option value="UGX" label="UGX">
                Ugandan Shilling
              </option>
              <option value="UAH" label="UAH">
                Ukrainian Hryvnia
              </option>
              <option value="AED" label="AED">
                United Arab Emirates Dirham
              </option>
              <option value="UYU" label="UYU">
                Uruguayan Peso
              </option>
              <option value="USD" label="USD">
                US Dollar
              </option>
              <option value="UZS" label="UZS">
                Uzbekistan Som
              </option>
              <option value="VUV" label="VUV">
                Vanuatu Vatu
              </option>
              <option value="VEF" label="VEF">
                Venezuelan BolÃ­var
              </option>
              <option value="VND" label="VND">
                Vietnamese Dong
              </option>
              <option value="YER" label="YER">
                Yemeni Rial
              </option>
              <option value="ZMK" label="ZMK">
                Zambian Kwacha
              </option>
            </select>
            <input
              type="number"
              name="product_price"
              id="product-price"
              placeholder="Price"
              value={props.FieldValues.product_price}
              onChange={props.TextChangeHandler}
              autoComplete="given-name"
              className="block mdsm:max-w-xs rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSection3;
