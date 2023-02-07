const items = []

while(true) items.push(items)

// # Fatal error in , line 0
// # Fatal JavaScript invalid size error 169220804
// #
// #
// #
// #FailureMessage Object: 0x7ff7bf249e00
//  1: 0x100df6452 node::NodePlatform::GetStackTracePrinter()::$_3::__invoke() [/Users/mateusbraga/.nvm/versions/node/v18.12.0/bin/node]
//  2: 0x101fa5b33 V8_Fatal(char const*, ...) [/Users/mateusbraga/.nvm/versions/node/v18.12.0/bin/node]
//  3: 0x101097796 v8::internal::FactoryBase<v8::internal::Factory>::NewFixedArray(int, v8::internal::AllocationType) [/Users/mateusbraga/.nvm/versions/node/v18.12.0/bin/node]
//  4: 0x101274a54 v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastPackedObjectElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)2> >::GrowCapacity(v8::internal::Handle<v8::internal::JSObject>, unsigned int) [/Users/mateusbraga/.nvm/versions/node/v18.12.0/bin/node]
//  5: 0x1014c9477 v8::internal::Runtime_GrowArrayElements(int, unsigned long*, v8::internal::Isolate*) [/Users/mateusbraga/.nvm/versions/node/v18.12.0/bin/node]
//  6: 0x1018d0cf9 Builtins_CEntry_Return1_DontSaveFPRegs_ArgvOnStack_NoBuiltinExit [/Users/mateusbraga/.nvm/versions/node/v18.12.0/bin/node]
//  7: 0x1062cda78
//  8: 0x101854d50 Builtins_InterpreterEntryTrampoline [/Users/mateusbraga/.nvm/versions/node/v18.12.0/bin/node]
