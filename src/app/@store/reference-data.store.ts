// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { observable, action, computed } from 'mobx';
// import * as _ from 'lodash';

// import { ReferenceDataService } from '../@core/http';

// @Injectable()
// export class ReferenceDataStore {
//   constructor(private referenceDataService: ReferenceDataService) {}

//   @observable questionTypes: BaseEntityHierarchy[];
//   @observable rightTypes: any[];
//   @observable countrySystemInstituteTypes: BaseEntity[];
//   @observable instrumentTypes: BaseEntity[];
//   @observable legalSystemTypes: BaseEntity[];
//   @observable obstacleTypes: BaseEntity[];
//   @observable populationTypes: BaseEntity[];
//   @observable ratificationTypes: BaseEntity[];
//   @observable severityTypes: BaseEntity[];
//   @observable politicalTypes: BaseEntity[];

//   @observable populationTypesDict: any;
//   @observable rightCategoriesDict: any;

//   fetchBase(innerData: any, serviceData: Observable<any>, next: (x: any) => void): Observable<any> {
//     if (innerData != null) {
//       return Observable.of(innerData);
//     }
//     return serviceData.do(next);
//   }

//   get rightTypesForUI(): any[] {
//     return this.rightTypes.map(x => {
//       return {
//         id: x.id,
//         name: x.name,
//         rightCategories: x.rightCategories.map(y => {
//           return {
//             id: y.id,
//             name: y.name,
//             rightTypeId: y.rightTypeId,
//             checked: false,
//           };
//         }),
//       };
//     });
//   }

//   public cloneRightTypes(value: any[]): any[] {
//     return value.map(x => {
//       return {
//         id: x.id,
//         name: x.name,
//         rightCategories: x.rightCategories.map(y => {
//           return {
//             id: y.id,
//             name: y.name,
//             rightTypeId: y.rightTypeId,
//             checked: y.checked,
//           };
//         }),
//       };
//     });
//   }

//   @action
//   fetchQuestionTypes(): Observable<any> {
//     return this.fetchBase(
//       this.questionTypes,
//       this.referenceDataService.listQuestionTypes(),
//       data => (this.questionTypes = data),
//     );
//   }

//   @action
//   fetchRightTypes(): Observable<any> {
//     return this.fetchBase(
//       this.rightTypes,
//       this.referenceDataService.listRightTypes(),
//       data => {
//         this.rightTypes = data;
//         this.rightCategoriesDict = Object();
//         for (const rightType of this.rightTypes) {
//           for (const rightCat of rightType.rightCategories) {
//             rightCat.parentId = rightType.id;
//             this.rightCategoriesDict[`${rightCat.id}`] = rightCat;
//           }
//         }
//       });
//   }

//   @action
//   fetchCountrySystemInstituteTypes(): Observable<any> {
//     return this.fetchBase(
//       this.countrySystemInstituteTypes,
//       this.referenceDataService.listCountrySystemInstituteTypes(),
//       data => (this.countrySystemInstituteTypes = data),
//     );
//   }

//   @action
//   fetchLegalSystemTypes(): Observable<any> {
//     return this.fetchBase(
//       this.legalSystemTypes,
//       this.referenceDataService.listLegalSystemTypes(),
//       data => (this.legalSystemTypes = data),
//     );
//   }

//   @action
//   fetchObstacleTypes(): Observable<any> {
//     return this.fetchBase(
//       this.obstacleTypes,
//       this.referenceDataService.listObstacleTypes(),
//       data => (this.obstacleTypes = data),
//     );
//   }

//   @action
//   fetchPopulationTypes(): Observable<any> {
//     return this.fetchBase(this.populationTypes, this.referenceDataService.listPopulationTypes(), data => {
//       this.populationTypes = data;
//       this.populationTypesDict = Object();
//       for (const item of this.populationTypes) {
//         this.populationTypesDict[`${item.id}`] = item;
//       }
//     });
//   }

//   @action
//   fetchRatificationTypes(): Observable<any> {
//     return this.fetchBase(
//       this.ratificationTypes,
//       this.referenceDataService.listRatificationTypes(),
//       data => (this.ratificationTypes = data),
//     );
//   }

//   @action
//   fetchInstrumentTypes(): Observable<any> {
//     return this.fetchBase(
//       this.instrumentTypes,
//       this.referenceDataService.listInstrumentTypes(),
//       data => (this.instrumentTypes = data),
//     );
//   }

//   @action
//   fetchSeverityTypes(): Observable<any> {
//     return this.fetchBase(
//       this.severityTypes,
//       this.referenceDataService.listSeverityTypes(),
//       data => (this.severityTypes = data),
//     );
//   }

//   @action
//   fetchPoliticalTypes(): Observable<any> {
//     return this.fetchBase(
//       this.politicalTypes,
//       this.referenceDataService.listPoliticalTypes(),
//       data => (this.politicalTypes = data),
//     );
//   }

//   @computed
//   get pluralSystemId(): number {
//     return 3;
//   }

//   @computed
//   get variants3(): any[] {
//     const threeVariantsType = 1;
//     const filtered = this.questionTypes.filter(type => type.id === threeVariantsType);
//     return _.flatMap(filtered, x => x.variants.map(v => v));
//   }
// }

// export interface BaseEntity {
//   id: number;
//   name: string;
//   parentId: number;
// }

// export interface BaseEntityHierarchy {
//   id: number;
//   name: string;
//   variants: BaseEntity[];
// }
