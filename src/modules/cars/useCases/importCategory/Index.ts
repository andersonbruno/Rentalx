import { ImportCategoryController } from './ImportCategoryController';
import { ImportCateroryUseCase } from './ImportCategoryUseCase';

const importCategoryUseCase = new ImportCateroryUseCase();
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController };
