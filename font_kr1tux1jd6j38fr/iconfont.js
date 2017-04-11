;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-wangdian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.998977 958.604594c-55.706743 0.285502-335.060125-418.210917-335.060125-558.254463 0-184.987155 150.010549-334.954725 335.060125-334.954725 185.04753 0 335.061149 149.96757 335.061149 334.954725C847.060125 538.514887 566.831816 958.890097 511.998977 958.604594zM511.998977 121.221876c-154.206104 0-279.216259 124.970246-279.216259 279.128255 0 116.702955 232.793974 474.753701 279.216259 474.516294C557.694715 875.103832 791.214213 515.493567 791.214213 400.350131 791.214213 246.192122 666.205081 121.221876 511.998977 121.221876zM511.998977 539.913746c-77.104075 0-139.608641-62.486146-139.608641-139.563616 0-77.079516 62.504566-139.563616 139.608641-139.563616 77.103052 0 139.607618 62.4841 139.607618 139.563616C651.606595 477.4276 589.102029 539.913746 511.998977 539.913746zM511.998977 316.612984c-46.261627 0-83.765799 37.487799-83.765799 83.73817 0 46.2473 37.504172 83.7351 83.765799 83.7351s83.764775-37.487799 83.764775-83.7351C595.763752 354.09976 558.260603 316.612984 511.998977 316.612984z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhanghuguanligenghuanshoujihao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M397.920802 623.50456c0-0.251733-0.074701-0.488117-0.074701-0.73985l0.054235 0c4.804423-131.641179 112.735597-236.975203 245.551532-236.975203 53.766554 0 103.186104 17.639752 143.609769 46.944172l-37.987173 36.956703 0.216941 0.236384c-4.010337 4.711302-6.535857 10.742668-6.535857 17.442254 0 14.951527 12.134365 27.065426 27.080775 27.065426l22.768563 0 0.01842 0.016373 0.01535-0.016373L896.225895 514.434445c14.947434 0 27.080775-12.113899 27.080775-27.065426L923.30667 360.964098c0-14.950504-12.133342-27.065426-27.080775-27.065426-11.412934 0-21.125133 7.078209-25.116027 17.043165l-33.438577 32.519648c-53.549613-42.1244-120.752178-67.636446-194.2184-67.636446-165.204599 0-300.131615 127.001509-314.086441 288.594861-1.084705 2.924609-1.879813 6.011924-1.879813 9.332553 0 1.154289 0.379647 2.184759 0.650823 3.269463-0.379647 2.111081-0.650823 4.26207-0.650823 6.481621 0 19.464307 15.760962 35.225269 35.225269 35.225269C382.15984 658.729829 397.920802 642.968867 397.920802 623.50456L397.920802 623.50456zM959.418123 628.018364c0-1.316995-0.251733-2.564405-0.379647-3.847631-0.01842-0.449231-0.053212-0.918929-0.073678-1.390673l-0.069585 0c-2.545986-16.934694-17.026792-29.971615-34.685987-29.971615-17.673521 0-32.156374 13.056364-34.701336 29.971615l-0.503467 0c0.034792 1.119497 0.089028 2.238994 0.179079 3.377934-0.034792 0.63138-0.197498 1.227967-0.197498 1.87879 0 1.515516 0.271176 2.940982 0.433882 4.405333-0.364297 135.574768-110.299105 245.369384-245.966994 245.369384-53.878095 0-103.328343-17.732873-143.756101-47.179532l35.227316-34.95307c5.505387-4.804423 9.225105-11.502985 9.225105-19.444864 0-14.950504-12.133342-27.083845-27.080775-27.083845l-22.570042 0-0.686638-0.686638-0.685615 0.686638L390.678864 749.150188c-14.950504 0-27.080775 12.133342-27.080775 27.083845l0 126.385479c0 14.950504 12.130272 27.080775 27.080775 27.080775 1.967818 0 3.703345-0.721431 5.562692-1.115404l0.070608 1.115404 1.390673-1.426489c7.004531-1.914606 12.657274-6.427386 16.104793-12.509918l35.983539-35.677571c53.426817 42.051745 120.322389 67.671239 193.660698 67.671239 174.48394 0 315.946812-141.444453 315.966255-315.931462l0-0.034792c0-0.849344-0.089028-1.682315-0.127913-2.511193C959.310675 628.848265 959.418123 628.452245 959.418123 628.018364L959.418123 628.018364zM959.418123 628.018364"  ></path>' +
    '' +
    '<path d="M250.360048 727.69555c0.473791-31.733749 23.068392-52.196803 39.47199-54.543244-6.608511-26.684756-3.264347-18.937305-3.264347-47.665603 0-183.001941 142.299937-332.764849 322.284147-344.683297L608.851838 142.835126c0-37.913495-29.788443-67.706031-70.4137-67.706031l-406.242328 0c-37.913495 0-67.706031 29.792537-67.706031 67.706031l0 628.321262c0 37.916565 29.792537 70.4137 70.4137 70.4137l170.624029 0 56.951083 0c-13.706163-17.075911-43.041282-35.479049-53.345975-54.990428C286.567691 788.564873 249.698992 771.996522 250.360048 727.69555zM201.449082 160.422689c0-15.111163 4.950755-30.221302 19.799952-30.221302l247.506047 0c9.899464 0 19.807115 15.111163 19.807115 30.221302 0 15.108093-9.906627 30.219255-19.807115 30.219255L221.24801 190.641945C211.348546 190.641945 201.449082 175.530782 201.449082 160.422689z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiaoxi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M510.76096 340.49536c-35.26016 0-63.84512 28.81408-63.84512 64.34816 0 35.53152 28.58496 64.3328 63.84512 64.3328s63.84512-28.80128 63.84512-64.3328C574.60608 369.30944 546.02112 340.49536 510.76096 340.49536zM970.44608 40.22912 51.07584 40.22912C22.8672 40.22912 0 63.10272 0 91.3152l0 669.94816c0 28.19968 22.8672 51.07328 51.07584 51.07328l256.0192 0-77.25312 198.3488 306.2848-198.3488 434.31936 0c28.20736 0 51.07584-22.87488 51.07584-51.07328L1021.52192 91.3152C1021.52192 63.10272 998.65344 40.22912 970.44608 40.22912zM970.44608 729.76384c0 14.10432-11.43296 25.53856-25.53856 25.53856L510.76096 755.3024l-153.2288 102.15168 38.64704-102.15168L76.6144 755.3024c-14.10432 0-25.53856-11.43296-25.53856-25.53856L51.07584 116.84992c0-14.10432 11.43296-25.53856 25.53856-25.53856L944.9088 91.31136c14.10432 0 25.53856 11.43296 25.53856 25.53856L970.44736 729.76384zM744.85888 340.49536c-35.26016 0-63.84512 28.81408-63.84512 64.34816 0 35.53152 28.58496 64.3328 63.84512 64.3328 35.26272 0 63.84512-28.80128 63.84512-64.3328C808.704 369.30944 780.1216 340.49536 744.85888 340.49536zM276.66176 340.49536c-35.26016 0-63.84512 28.81408-63.84512 64.34816 0 35.53152 28.58496 64.3328 63.84512 64.3328 35.26016 0 63.84512-28.80128 63.84512-64.3328C340.50688 369.30944 311.92192 340.49536 276.66176 340.49536z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yiyuanduobao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.999488 62.938448c-248.009514 0-449.060529 201.052039-449.060529 449.060529s201.052039 449.060529 449.060529 449.060529c248.009514 0 449.060529-201.052039 449.060529-449.060529S760.009002 62.938448 511.999488 62.938448zM797.816073 797.816584c-37.117362 37.117362-80.344886 66.261123-128.479163 86.6198-49.839105 21.080108-102.775758 31.768541-157.338445 31.768541S404.500149 905.516492 354.661044 884.436384c-48.134277-20.3597-91.360777-49.502437-128.47814-86.6198-37.118386-37.118386-66.261123-80.344886-86.620823-128.479163-21.080108-49.839105-31.768541-102.775758-31.768541-157.337421 0-54.562686 10.688433-107.499339 31.768541-157.338445 20.3597-48.134277 49.502437-91.359754 86.620823-128.47814 37.117362-37.118386 80.344886-66.261123 128.47814-86.6198 49.839105-21.081131 102.775758-31.768541 157.338445-31.768541S619.498828 118.481462 669.337933 139.562593c48.134277 20.358677 91.360777 49.502437 128.479163 86.6198 37.118386 37.118386 66.262146 80.344886 86.620823 128.47814 21.080108 49.839105 31.768541 102.775758 31.768541 157.338445 0 54.562686-10.688433 107.498316-31.768541 157.337421C864.078219 717.471698 834.935482 760.697175 797.816073 797.816584z"  ></path>' +
    '' +
    '<path d="M511.999488 128.260176c-211.595162 0-383.739824 172.144662-383.739824 383.739824s172.144662 383.739824 383.739824 383.739824c211.595162 0 383.740848-172.144662 383.740848-383.739824S723.594651 128.260176 511.999488 128.260176zM678.569178 640.737036l7.506974 1.471514 80.080873-0.010233 7.407714-1.462305 0 13.682627-7.506974-1.471514-80.080873 0.010233-7.407714 1.462305L678.569178 640.737036zM647.904785 763.040547 374.977765 763.040547l0-30.865985 53.565986 0c19.736507 0 29.331026-10.679223 29.331026-32.647561L457.874777 329.068667c-34.944883 21.75242-68.199265 36.111452-98.857519 42.684148l-0.366344 0.078795-13.725606-24.019043 0.503467-0.234337c65.918315-30.744211 122.758881-73.095785 168.942737-125.876895l0.152473-0.174985 47.166229 0 0 474.685139c-1.152243 13.738909 1.001817 23.660886 6.402827 29.534663 4.078899 4.437056 10.139941 6.686283 18.014282 6.687306 0.002047 0 0.00307 0 0.004093 0 1.539053 0 3.174296-0.086981 4.859681-0.255827l56.933687-0.00307L647.904785 763.040547zM786.017352 753.644549c-1.206478 1.299599-2.416026 2.368954-3.613294 3.199878-2.088568 1.233084-5.360078 1.849114-9.756201 1.849114L749.391177 758.693542c-6.786567-0.094144-11.101849-1.113357-13.198603-3.116991-1.735527-1.366114-3.015683-2.980891-3.768837-4.767584-0.932232-1.859347-1.391696-4.986571-1.391696-9.529027l0-48.435129-12.633738 0 0 2.733251c0 9.015328-1.280156 18.159592-3.804652 27.181059-1.269923 4.529153-2.924609 8.549723-4.919033 11.952216-2.000564 3.409656-4.669346 6.700609-7.933693 9.780761-7.862062 7.68196-17.581424 13.138228-28.881794 16.21224-1.546216 0.454348-3.963265 1.092891-7.176446 1.896186l-0.464581 0.115634-2.849908-8.849552 0.39295-0.196475c5.726421-2.865257 10.522658-5.716188 14.257725-8.472975 8.695033-6.565533 14.547321-15.027252 17.389042-25.145703 1.870604-6.857175 2.865257-15.183817 2.955308-24.74559l0-2.457981L672.049694 692.847881l-7.40669 1.462305 0-13.006222 7.505951 1.471514 108.881826-0.010233 7.40669-1.462305 0 13.006222-7.505951-1.471514-29.27065 0.010233 0 41.944298c0 2.061962 0.36225 3.473101 1.044796 4.078899 0.907673 0.909719 2.605338 1.358951 5.068436 1.358951l15.819291 0c2.097778-0.082888 3.581572-0.494257 4.391007-1.220804 0.802272-0.723477 1.338485-2.118244 1.592264-4.145413l1.119497-14.429641 9.803273 1.056052-1.521656 21.585621C788.606317 748.279355 787.637246 751.736083 786.017352 753.644549z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-7tian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M968.392706 324.274228c0 0-0.074568 0.208588-0.212619 0.590495l-0.085652-0.590495-79.60299 165.105894 84.442834-9.716972c6.079279 70.344509-3.855349 141.684596-29.920777 209.242894-22.824757 59.180521-56.559569 112.108443-100.248155 157.318613-42.21134 43.674479-91.8996 78.359524-147.689308 103.083741-55.789708 24.730263-114.858377 38.249178-175.561489 40.19096-62.845421 2.009296-124.714408-8.547066-183.890898-31.372831-59.180521-22.831811-112.108443-56.559569-157.318613-100.255208-43.673471-42.21134-78.359524-91.8996-103.089787-147.687293-24.724217-55.789708-38.249178-114.854347-40.19096-175.562497-2.004258-62.840382 8.553112-124.712393 31.377869-183.888883 22.831811-59.17649 56.559569-112.109451 100.255208-157.31962 42.205294-43.673471 91.8996-78.359524 147.689308-103.083741 55.782654-24.730263 114.852331-38.24817 175.561489-40.189952 62.840382-2.010304 124.712393 8.546058 183.888883 31.377869 53.794519 20.751978 102.605097 50.640509 145.077425 88.83628l22.358205-24.858237c-45.50844-40.929583-97.793468-72.956392-155.400007-95.175539C622.455202 25.867561 556.17967 14.565522 488.840036 16.719923 423.807969 18.798748 360.541342 33.274951 300.795518 59.760577 241.051709 86.239149 187.831562 123.388958 142.615347 170.178148 95.792903 218.622941 59.654796 275.319553 35.206681 338.698032c-24.448115 63.372433-35.749146 129.655019-33.595753 196.993645 2.074795 65.032067 16.557043 128.298694 43.041661 188.044518 26.47958 59.743809 63.627373 112.963956 110.417571 158.180171 48.443786 46.822443 105.142413 82.954504 168.520892 107.408665 63.371425 24.448115 129.653004 35.755192 196.987599 33.600791 65.032067-2.080841 128.302725-16.561074 188.048549-43.0467 59.745824-26.47958 112.965971-63.627373 158.182187-110.416563 46.815389-48.443786 82.953496-105.142413 107.401612-168.520892C1021.36295 578.717215 1019.300247 444.94586 968.392706 324.274228L968.392706 324.274228zM968.392706 324.274228"  ></path>' +
    '' +
    '<path d="M497.821408 742.004263c11.259716-129.63285 62.68117-253.654988 154.304668-372.02913l0-65.526833L330.828146 304.4483l0 73.982201 224.06372 0c-84.54864 114.145954-135.280847 235.359713-152.19259 363.572754L497.821408 742.003256 497.821408 742.004263zM497.821408 742.004263"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-editor2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M941.214017 773.83131c-1.203408-6.122441-4.175089-11.967566-8.92016-16.709567L659.77309 485.569024c11.047614-28.091802 18.101263-58.189284 20.465101-89.596598 0.49528-2.258437 0.76441-4.601808 0.76441-7.008624l-0.204661-2.164293c0.215918-4.736884 0.331551-9.500375 0.331551-14.291494 0-170.725336-138.406257-309.12443-309.133639-309.12443-44.024679 0-85.889159 9.219989-123.793444 25.809829-6.462179 0.883113-12.706393 3.711532-17.797341 8.479115-3.634784 1.87572-7.231705 3.814886-10.780531 5.828752l3.723811 3.723811c-5.885034 12.125155-3.801583 27.143197 6.268774 37.214577l145.882532 146.790204-83.827197 84.479043L145.461441 228.597395c-10.56666-10.580986-26.610054-12.347213-39.025828-5.316076l-3.412726-3.195785c-2.139733 3.767813-4.195555 7.588839-6.178723 11.452843-2.946099 3.748371-4.958942 7.989975-6.025227 12.415774-17.929348 39.147602-27.940352 82.678024-27.940352 128.553864 0 170.728406 138.389884 309.125453 309.117266 309.125453 39.10053 0 76.498278-7.272637 110.931508-20.520359l249.061472 248.176312c6.505158 8.368598 14.052041 15.885805 22.444175 22.363334l1.667989 1.661849c3.611248 3.616364 7.865131 6.200212 12.392238 7.758708 18.34174 10.55438 39.61116 16.59291 62.291718 16.59291 69.076238 0 125.074623-55.999408 125.074623-125.074623C955.859575 811.351855 950.556802 791.351336 941.214017 773.83131zM830.850443 893.439432c-11.418051 0-22.098297-3.15383-31.226189-8.629541l-20.844747-20.771069c-0.813528-1.345648-1.568728-2.729158-2.278903-4.140297l-65.075111-64.712861c-0.13917 0.441045-0.287549 0.876973-0.420579 1.320065L543.574624 629.668956c0.097214-0.064468 0.195451-0.12689 0.292666-0.192382l-47.081295-47.079248c-36.735669 21.945825-79.68383 34.56933-125.585253 34.56933-135.449925 0-245.2691-109.810988-245.2691-245.260913 0-21.555945 2.785439-42.460044 8.010441-62.376653l127.742383 128.536468c0.877997 0.877997 1.796926 1.689479 2.745531 2.445702 1.152243 1.708921 2.479471 3.335978 3.991917 4.847401 12.712533 12.712533 33.305547 12.712533 46.01808 0L444.138938 314.460971c12.712533-12.71151 12.712533-33.313733 0-46.026266-0.804319-0.804319-1.641383-1.556449-2.50403-2.25946-1.098008-1.585101-2.344395-3.098571-3.755534-4.50971l-126.9616-127.743406c19.287275-4.879124 39.480176-7.483438 60.283991-7.483438 135.450948 0 245.252727 109.812011 245.252727 245.2691 0 2.515287-0.051165 5.01727-0.12689 7.514137-0.455371 2.170432-0.698918 4.418636-0.698918 6.724145l0.245593 2.584871c-1.771343 26.097378-7.619538 51.076282-16.919345 74.30124l4.071735 2.801812c-1.802042 1.191128-3.511987 2.579755-5.098111 4.166903-12.713556 12.712533-12.713556 33.314757 0 46.027289l155.519006 154.962328 0.272199-0.291642 28.646434 29.106922 13.047154 13.000082c-0.064468 0.019443-0.127913 0.040932-0.192382 0.060375l66.682725 67.75515c1.577938 0.941442 3.115967 1.942235 4.597715 3.01773l13.446243 13.398148c7.341199 10.045797 11.685133 22.420639 11.685133 35.815717C891.630738 866.217441 864.410793 893.439432 830.850443 893.439432z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xuangoushouji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M392.533333 661.333333 320 661.333333 320 256l264.533333 0c0 0 0 8.533333 0 8.533333l21.333333 0L605.866667 196.266667c0-12.8-4.266667-21.333333-17.066667-21.333333L315.733333 174.933333C302.933333 174.933333 298.666667 183.466667 298.666667 196.266667l0 537.6c0 12.8 4.266667 21.333333 17.066667 21.333333l76.8 0L392.533333 661.333333z"  ></path>' +
    '' +
    '<path d="M725.333333 302.933333l-273.066667 0c-12.8 0-17.066667 12.8-17.066667 21.333333l0 537.6c0 12.8 4.266667 21.333333 17.066667 21.333333L725.333333 883.2c12.8 0 17.066667-12.8 17.066667-21.333333L742.4 324.266667C742.4 315.733333 733.866667 302.933333 725.333333 302.933333zM618.666667 857.6 554.666667 857.6c-12.8 0-21.333333-8.533333-21.333333-21.333333s8.533333-21.333333 21.333333-21.333333l64 0c12.8 0 21.333333 8.533333 21.333333 21.333333S631.466667 857.6 618.666667 857.6zM721.066667 793.6l-264.533333 0L456.533333 384l264.533333 0L721.066667 793.6z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-neicun" viewBox="0 0 1099 1024">' +
    '' +
    '<path d="M841.66 313.7 676.06 189.2c-3.7-2.8-8.1-4.3-12.7-4.3L277.56 185c-8.5 0-16.7 5.9-16.7 16.8l0 618.8c0 13.9 12 27.2 27.3 27.2l552.2 0c8.8 0 14.8-4.3 14.8-14.2L855.16 330.1C855.06 323.4 847.06 317.7 841.66 313.7zM682.36 257.7l0 124.5c0 4.9-2.4 9.2-7.8 9.2l-262 0c-7.2 0-8.2-3.8-8.2-9.5l0-145.1 248.4 0L682.36 257.7zM804.66 778.6c0 10.7-6.5 18-16.9 18l-461 0c-8.1 0.1-13.5-5.8-13.5-14.5L313.26 248.4c0-7.1 6.6-11.5 15.3-11.5 7.5 0 17 0 27.7 0l0.1 190.4c0 6.9 4.3 10.1 10.8 10.1l346.1-0.1c6.8 0.1 10.7-5 10.5-12.7l0.1-135.2 80.8 60.4L804.66 778.6zM371.56 621.2l188.7 0c6.7 0 11.2-4.3 11.2-10.4 0-5.2 0-20.1 0-25.7 0-6.6-7-10.8-13.2-10.8L370.16 574.3c-7.8 0-11.7 4.9-11.7 10.8 0 6.4 0 21.7 0 25.4C358.46 616.5 363.16 621.2 371.56 621.2zM709.86 574.3l-95 0c-8.2 0-14.1 4.7-14.1 11.3 0 4.7 0 19 0 23.8 0 8.1 6.3 11.9 13.6 11.9l94.3 0c8.4 0 15.2-5.9 15.2-13.2 0-6.2 0-11.8 0-18.9C723.96 581.2 718.46 574.3 709.86 574.3zM480.06 698.5 371.76 698.5c-8.3 0-13.4 4.3-13.4 13.3 0 6 0 12.2 0 17.3 0 8.9 5.4 14.4 13.7 14.4l105.6 0c7.9 0 15.1-5.3 15.1-14 0-6.7 0-11.6 0-16.3C492.76 705 486.06 698.5 480.06 698.5zM709.06 698.5 533.56 698.5c-8.9 0-14.2 6.5-14.2 14.1 0 4.4 0 12.5 0 17.3 0 6.2 5.6 13.6 14.5 13.6l174 0c8.9 0 16-6.3 16-15.4 0-4.1 0-8.7 0-14.9C723.96 704.8 718.66 698.5 709.06 698.5zM627.46 360.4c7.3 0 13.2-6.1 13.2-11.4L640.66 277.4c0-7.4-4.1-11.5-10.3-11.5-5.1 0-24.9 0-29.3 0-6.2 0-9.2 4.5-9.2 11.4l0 71.9c0 6.4 6.3 11.3 11.9 11.3C608.56 360.4 622.06 360.4 627.46 360.4z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-15tianwuyouhuanhuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M910.25 380.937c-47.063 12.187-93.75 24.375-141.563 36.75 35.813-67.687 71.25-134.438 106.5-201 120.563 139.313 157.5 383.438 14.813 576-149.25 201.563-426 247.875-631.5 114-210.562-137.25-273.563-410.25-152.625-622.875 126.375-221.813 377.438-278.813 560.813-212.438-5.063 16.875-10.313 33.75-15.188 50.063-16.688-4.313-32.625-9.188-48.937-12.75-44.25-9.938-89.063-12-134.25-6.937-77.625 8.812-147.563 36.75-208.875 85.125-83.812 66-136.5 151.688-153.563 257.063-21.75 134.438 13.875 253.125 106.125 353.25 64.125 69.75 144.188 112.313 237.938 126 133.5 19.688 251.063-16.688 349.875-108.75 68.25-63.75 109.125-142.875 124.313-235.312 6.75-40.688 6.75-81.188 0.188-121.875-3.938-24.375-8.438-48.562-12.75-72.938-0.563-0.75-0.938-1.688-1.313-3.375z"  ></path>' +
    '' +
    '<path d="M502.062 512.938c8.625-66.938 17.25-133.125 25.875-199.688 63.375 0 126.75 0 190.5 0 0 17.063 0 34.5 0 52.125-48.188 0-96.188 0-145.125 0-4.688 33-9.188 65.625-13.875 98.813 6.563-0.375 12.563-0.938 18.375-1.125 33.188-1.5 64.875 4.125 93.375 21.937 33.375 20.813 51.375 51.563 55.313 90.562 3.563 36-3.937 69.187-25.313 98.813-22.5 31.125-53.438 49.125-90.75 55.875-41.813 7.688-82.5 2.625-121.688-14.25-3.375-1.5-6.563-3.375-10.312-5.25 4.687-16.125 9.562-32.063 14.062-47.813 11.438 4.313 22.125 9.188 33.375 12.563 24.562 7.313 49.5 10.5 75 3.563 37.875-10.688 62.625-44.438 61.313-83.813-0.75-25.875-9.188-48-30.563-63.938-15.188-11.25-32.625-16.688-51-19.125-24.563-3.375-49.313-2.438-73.875 0.563-1.125 0-2.625 0-4.687 0.188z"  ></path>' +
    '' +
    '<path d="M346.437 727.438c-20.625 0-40.688 0-61.5 0 0-118.687 0-237 0-356.625-24.188 13.313-47.438 26.063-71.25 39.188-1.125-3.938-2.25-7.313-3.375-10.875-3.375-10.687-6.375-21.375-9.938-32.063-0.938-2.813-0.563-4.313 2.25-5.812 29.25-15.563 58.5-31.313 87.75-46.875 1.313-0.75 3-1.313 4.5-1.313 17.063-0.187 34.125 0 51.563 0 0 138 0 276 0 414.375z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-liwu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M221.86496 946.25792c-37.12512 0-67.328-30.20288-67.328-67.328V540.928H128c-11.9552 0-24.65792-8.64256-24.65792-24.65792V384c0-35.94752 28.94336-63.05792 67.328-63.05792h69.95456l-17.34656-16.36352c-28.6208-26.99776-43.136-60.5696-43.136-99.77856 0-41.19552 25.58464-84.22912 63.6672-107.07968 19.74272-11.84256 42.32704-17.84832 67.12832-17.84832 25.1648 0 51.28192 6.16448 77.62944 18.3296 55.67488 28.8768 93.27616 87.19872 114.94912 131.00032L512 246.35904l8.48896-17.16224c21.66784-43.8016 59.27424-102.1184 115.33824-131.18976 25.95328-11.97056 51.5328-18.13504 75.63264-18.13504 23.87968 0 47.11424 6.07232 69.0688 18.04288 37.73952 22.656 63.32416 65.6896 63.32416 106.88512 0 39.20896-14.5152 72.77568-43.136 99.77856l-17.34656 16.36352h69.94944c36.49536 0 67.328 28.8768 67.328 63.05792v134.89664c-3.6608 9.5744-13.2352 22.03648-24.65792 22.03648h-26.54208v338.00192c0 37.12512-30.20288 67.328-67.328 67.328H221.86496z m314.79296-45.056h261.21216c9.4208 0 18.00192-8.58112 18.00192-18.00192v-338.00192h-279.20896v356.00384zM199.59296 883.2c0 9.4208 8.58112 18.00192 18.00704 18.00192h269.74208v-355.99872h-287.744V883.2z m337.06496-387.328h338.93888V384c0-9.4208-8.58112-18.00704-18.00192-18.00704h-320.94208V495.872zM167.3216 364.32384c-7.06048 0-14.65856 6.15936-14.65856 19.67616v111.872h334.67904V365.99296H173.71648a13.23008 13.23008 0 0 0-6.39488-1.66912z m546.2784-241.53088c-16.34816 0-33.92512 4.64384-52.23424 13.7984-71.3472 35.67104-109.8496 137.30816-119.95136 167.60832l-4.16256 12.4672H640c78.42304 0 163.072-42.77248 163.072-111.872 0-19.1488-13.37856-52.75648-43.10016-67.93728-14.19776-9.32864-29.7984-14.06464-46.37184-14.06464z m-406.4 0c-14.6432 0-29.33248 4.84352-43.65312 14.39232C234.2656 156.70272 220.928 185.91744 220.928 204.8c0 73.4464 82.03264 111.872 163.072 111.872h102.74304l-4.15744-12.4672C453.34016 216.47872 412.90752 160.0512 362.40384 136.48384 344.32512 127.4368 325.67296 122.79296 307.2 122.79296z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-chongzhi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M495.616 836.608h-372.224c-39.936 0-80.384-39.936-80.384-88.064v-377.344h840.704V456.192c0 11.264 8.192 20.48 19.456 20.48s17.408-9.216 17.408-20.48v-171.52c0-70.656-62.464-127.488-132.608-127.488h-654.336c-70.656 0-127.488 57.344-127.488 127.488v464.896c0 70.656 57.344 124.928 127.488 124.928h361.984c11.264 0 20.48-6.656 20.48-17.92-0.512-11.264-9.216-19.968-20.48-19.968z m-369.152-642.56h668.672c48.64 0 88.576 41.984 88.576 91.136V338.432h-840.192v-53.248c0-38.912 34.304-91.136 82.944-91.136z"  ></path>' +
    '' +
    '<path d="M125.44 435.2c-18.432 0-32.768 11.264-32.768 25.088v2.56c0 14.336 14.848 25.6 32.768 25.6h21.504c18.432 0 33.28-11.264 33.28-25.6v-2.048c0-14.336-14.848-25.088-33.28-25.088l-21.504-0.512zM245.248 435.2c-18.432 0-33.28 11.264-33.28 25.088v2.56c0 14.336 14.848 25.6 33.28 25.6h21.504c18.432 0 32.768-11.264 32.768-25.6v-2.048c0-14.336-14.848-25.088-32.768-25.088l-21.504-0.512zM369.152 435.2c-18.432 0-32.768 11.264-32.768 25.088v2.56c0 14.336 14.848 25.6 32.768 25.6h21.504c18.432 0 33.28-11.264 33.28-25.6v-2.048c0-14.336-14.848-25.088-33.28-25.088l-21.504-0.512zM783.872 497.152c-128.512 0-233.472 104.448-233.472 233.472 0 128.512 104.448 233.472 233.472 233.472s233.472-104.448 233.472-233.472c0-129.536-104.96-233.472-233.472-233.472z m0 429.568c-108.032 0-196.096-88.064-196.096-196.096 0-108.032 88.064-196.096 196.096-196.096s196.096 88.064 196.096 196.096-88.064 196.096-196.096 196.096z"  ></path>' +
    '' +
    '<path d="M849.92 786.432c6.144 0 11.776 4.608 11.776 11.264 0 5.632-5.632 10.752-11.776 10.752h-57.344v38.4c0 5.632-4.608 10.752-12.288 10.752-6.656 0-11.776-5.12-11.776-10.752v-38.4H711.68c-6.144 0-11.264-5.12-11.264-11.264 0-6.144 5.12-10.752 11.264-10.752h57.344V753.152H711.68c-6.144 0-11.264-4.096-11.264-11.264 0-5.632 5.12-10.24 11.264-10.24h48.64l-50.176-88.064c-3.072-5.12-1.024-11.264 5.632-14.336 5.632-2.56 12.288-0.512 15.36 4.096l50.176 88.576 50.176-89.088c3.072-5.12 10.24-7.168 15.872-4.096 6.144 2.56 8.192 9.216 5.12 13.824v-0.512l-50.176 89.088h47.616c6.144 0 11.776 4.608 11.776 10.752 0 6.144-5.632 10.752-11.776 10.752h-57.344v33.28H849.92z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)