import {
  useForm,
  Resolver,
  FieldValues,
  UseFormReturn,
  UseFormProps,
  DefaultValues
  
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


export interface UseResolverFormProps<T extends FieldValues> {
    schema?: any;
    configs: Omit<UseFormProps<T>, "defaultValues"> & {
      defaultValues?: DefaultValues<T>;
    };
  }
export const useResolverForm = <T extends FieldValues>({
  schema,
  configs,
}: UseResolverFormProps<T>): UseFormReturn<T> => {
  return useForm<T>({
    shouldUnregister: false,
    mode: "onBlur",
    reValidateMode: "onBlur",
    criteriaMode: "firstError",
    delayError: 100,
    shouldFocusError: true,
    ...configs,
    resolver: yupResolver(schema) as any,
  });
};
