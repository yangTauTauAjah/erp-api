import { ApiError } from "@point-hub/express-error-handler";
import Validatorjs from "validatorjs";

export const validate = (body: any) => {
  const validation = new Validatorjs(body, {
    code: "required",
    name: "required",
    chartOfAccount: "required",
    hasProductionNumber: "required",
    hasExpiryDate: "required",
    unit: "required",
    converter: "required",
  });

  if (validation.fails()) {
    throw new ApiError(422, validation.errors.errors);
  }
};
